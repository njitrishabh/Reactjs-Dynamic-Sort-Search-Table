import React, { Component } from 'react';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            searchString: ''
        };

        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
        this.onSort = this.onSort.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getKeys = function () {
        return Object.keys(this.props.data[0]);
    }

    onSort(event, sortKey) {
        const data = this.state.data;
        data.sort((a, b) => {
            if (a[sortKey.key] < b[sortKey.key]) {
                return -1;
            }
            if (a[sortKey.key] > b[sortKey.key]) {
                return 1;
            }
            return 0;
        });
        this.setState({ data });
    }

    getHeader = function () {
        var keys = this.getKeys();
        return keys.map((key, index) => {
            return <th onClick={e => this.onSort(e, { key })} key={key}>{key.toUpperCase()}</th>
        })
    }

    getRowsData = function (newdata) {
        var items = newdata;
        var keys = this.getKeys();
        return items.map((row, index) => {
            return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
        })
    }


    handleChange = event => {
        this.setState({ searchString: event.target.value });
    };

    render() {
        var newdata = this.state.data;
        let searchString = this.state.searchString.trim().toLowerCase();
        if (searchString.length > 0) {
            var found = [];
            newdata.forEach(record => {
                Object.keys(record).forEach(function (key) {
                    if (typeof record[key] == 'string') {
                        if (record[key].toLowerCase().match(searchString)) {
                            found.push(record)
                        }
                    }
                })
            });
            newdata = found;
        }
        return (
            <div>
                <label>Filter Result</label>
                <p></p>
                <input
                    type="text"
                    placeholder="Search"
                    value={this.state.searchString}
                    onChange={this.handleChange}
                    className="searchString"
                />
                <table>
                    <thead>
                        <tr>{this.getHeader()}</tr>
                    </thead>
                    <tbody>
                        {this.getRowsData(newdata)}
                    </tbody>
                </table>
            </div >

        );
    }
}

const RenderRow = (props) => {
    return props.keys.map((key, index) => {
        return <td key={props.data[key]}>{props.data[key]}</td>
    })
}

export default Table;