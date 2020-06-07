import React, { Component } from 'react';

class Tablexml extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        };
    }

    componentDidMount() {
        let xml = this.state.data;
        let xmlNodes = xml.getElementsByTagName("Item");
        let tableNode = document.getElementById("BodyRows");
        let theTable = tableNode.parentNode;
        var newRow, newCell, i, j;
        for (i = 0; i < xmlNodes.length; i++) {
            newRow = tableNode.insertRow(i);
            newRow.className = (i % 2) ? "OddRow" : "EvenRow";
            for (j = 0; j < xmlNodes[i].childNodes.length; j++) {
                newCell = newRow.insertCell(newRow.cells.length);
                newCell.innerHTML = xmlNodes[i].childNodes[j].nodeValue;
            }
        }
        theTable.appendChild(tableNode);
    }

    render() {
        return (
            <table id="MainTable">
                <tbody id="BodyRows" ref="BodyRows">
                </tbody>
            </table>
        );
    }
}

export default Tablexml;