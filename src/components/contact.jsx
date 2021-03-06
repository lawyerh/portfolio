import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import axios from "axios";

import NavBar from "./nav-bar";
import NavGrid from "./nav-grid";

import TextInput from "./form/text-input";
import TextAreaInput from "./form/textArea-input";




class Contact extends Component {

    onSubmit(values) {
        console.log(values);
        axios.post('/sendMail', values, (err, response) => {
            if(err) {
                console.log(err);
            }

            else {
                console.log(response);
            }
        });


    }

    render(){
        const { handleSubmit } = this.props;

        return (

            <main className="contact">
                <NavBar />
                <nav className="nav">
                    <div className="nav__background">
                        <div className="contact__display">

                            <h2 className="contact__header">
                                Get in touch.
                            </h2>

                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form">
                                
                                <Field name="name" placeholder="Name" component={TextInput} />

                                <Field name="email" placeholder="Your Email Address" component={TextInput} />

                                <Field name="comments" placeholder="Comments or inquiries" component={TextAreaInput} />

                                <button type='submit' className='form__submit'>Send</button>
                            
                            </form>


                        </div>
                        <NavGrid />
                    </div>
                </nav>
            </main>
        )
    }
}
function validate (values){
    const errors = {};

    return errors;
}

export default reduxForm({
    validate,
    form: "contact"
})(Contact);