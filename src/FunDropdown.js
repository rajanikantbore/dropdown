import React from 'react';
import ReactDOM from 'react-dom';

export default class FunDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'chooseDevice' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log('event.target.value: ', event.target.value);
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    const renderInputBoxes = (): React.ReactElement => {

    }

    render() {
        return (
            <form>
                <div>
                    <label>
                        Pick your favorite flavor:
                            <select value={this.state.value} onChange={this.handleChange}>
                            <option value="chooseDevice">Choose Device</option>
                            <option value="sensor">Sensor</option>
                            <option value="motor">Motor</option>
                            <option value="relay">Relay</option>
                        </select>
                    </label>
                </div>
                <div>

                </div>
                {/* <input type="submit" value="Submit" /> */}
            </form>
        );
    }
}



