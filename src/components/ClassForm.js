import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewClass } from "../actions/"

const mapDispatchToProps = { addNewClass }

const ConnectedClassForm = props => {
  const [title, setTitle] = useState("")

  const handleChange = event => setTitle(event.target.value)

  const handleSubmit = event => {
    event.preventDefault();
    props.addNewClass({ title });
    setTitle("")
  }

  return (
    <div className="admin-form">
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Class Name</label>
        <input 
          type="text"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
    </div>
  )
}


// class ConnectedClassForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ [event.target.id]: event.target.value });
//   }
//   handleSubmit(event) {
//     event.preventDefault();
//     const { title } = this.state;
//     this.props.addNewClass({ title });
//     this.setState({ title: "" });
//   }
//   render() {
//     const { title } = this.state;
//     return (
//       <div className="admin-form">
//       <form onSubmit={this.handleSubmit}>
//         <div>
//           <label htmlFor="title">Class Name</label>
//           <input 
//             type="text"
//             id="title"
//             value={title}
//             onChange={this.handleChange}
//           />
//         </div>
//         <button type="submit">SAVE</button>
//       </form>
//       </div>
//     );
//   }
// }
const ClassForm = connect(
  null,
  mapDispatchToProps
)(ConnectedClassForm);
export default ClassForm