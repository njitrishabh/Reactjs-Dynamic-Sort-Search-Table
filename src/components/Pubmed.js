import React from 'react';
import Tablexml from './Tablexml';

class Pubmed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: '',
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('http://localhost:9000/pubmed')
            .then(res => res.text())
            .then(data => {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(data, "text/xml");
                this.setState({
                    isLoaded: true,
                    items: xmlDoc,
                })
            });
    }


    render() {
        var isLoaded = this.state.isLoaded;
        var items = this.state.items;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div className="App">
                    <Tablexml data={items} />
                </div>
            )
        }
    }
}
export default Pubmed;