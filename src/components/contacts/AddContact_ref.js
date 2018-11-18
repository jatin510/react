import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();

    }


    onSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        };

        console.log(contact);
    }




    static defaultProps = {
        name: 'parihar',
        email: 'jlajd',
        phone: 'jklsd'
    };


    render() {
        const { name, email, phone } = this.props;
        return (
            <div>
                <card className="mb-3">
                    <div className="card-header">
                        Add Contact
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name"></label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Name..."
                                    defaultValue={name}
                                    //onChange={this.onChange}
                                    ref={this.nameInput}
                                />
                                <label htmlFor="email"></label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter E-mail..."
                                    defaultValue={email}
                                    //onChange={this.onChange}
                                    ref={this.emailInput}
                                />
                                <label htmlFor="phone"></label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Phone Number..."
                                    defaultValue={phone}
                                    //onChange={this.onChange}
                                    ref={this.phoneInput}
                                />
                                <input
                                    type="submit"
                                    value="Add Contact"
                                    className="btn btn-light btn-block" />
                            </div>
                        </form>
                    </div>
                </card>
            </div>
        )
    }
}


export default AddContact;
