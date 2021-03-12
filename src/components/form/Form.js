import React from "react";



class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            nameLable: false,
            phoneLable: false

        }
        // console.log(this.props);
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(e.target.name);

    }

    setName = e => {

    }
    setPhone = e => {

    }
    
    blureHandle = e => {
        switch (e.target.name) {
            case 'name':
                this.setState({nameLable: true})
                break
            case 'phone':
                this.setState({phoneLable: true})
                break
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit} >
                <label>
                    {this.state.nameLable}
                    <input
                        className={"form__input" && this.state.nameLable ? "form__input alert" : "form__input" }
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.setName}
                        onBlur={this.blureHandle}
                        placeholder="Введите Имя"
                    />
                </label>
                <label>
                    {this.state.phoneLable}
                    <input
                        className={"form__input" && this.state.phoneLable ? "form__input alert" : "form__input" }
                        name="phone"
                        type="text"
                        value={this.state.phone}
                        onChange={this.setPhone}
                        onBlur={this.blureHandle}
                        placeholder="Введите Номер Телефона"
                    />
                </label>
                <button className="form__btn" type="submit">action</button>
            </form>
        );
    }
}

export default Form;


//^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$






// return (
//     <form className="form" onSubmit={this.handleSubmit} >
//         <label>
//             {this.state.nameLable}
//             <input
//                 className={"form__input" && this.state.nameLable ? "form__input alert" : "form__input" }
//                 name="name"
//                 type="text"
//                 value={this.props.name}
//                 onChange={e => this.props.setChangeName(e.target.value)}
//                 onBlur={this.blureHandle}
//                 placeholder="Введите Имя"
//             />
//         </label>
//         <label>
//             {this.state.phoneLable}
//             <input
//                 className={"form__input" && this.state.phoneLable ? "form__input alert" : "form__input" }
//                 name="phone"
//                 type="text"
//                 value={this.props.phone}
//                 onChange={e => this.props.setChangePhone(e.target.value)}
//                 onBlur={this.blureHandle}
//                 placeholder="Введите Номер Телефона"
//             />
//         </label>
//         <button className="form__btn" type="submit">action</button>
//     </form>
// );