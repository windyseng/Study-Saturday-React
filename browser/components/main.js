import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Main extends Component {
  constructor(props){
    super(props)
      this.state = {
        students: []
    }
    this.getStudents = this.getStudents.bind(this)
  }

  componentDidMount(){
    this.getStudents()
  }

  async getStudents(){
    try {
      const studentsResponse = await axios.get('/student')
      const students = studentsResponse.data
      this.setState({students})
    } catch (error) {
      console.log(error)
    }
  }


  render(){
    console.log('students-->', this.state.students)
    return(
      <div>
        <h2>Students</h2>
        <table>
          <thead>
            <tr>
              <td>Name</td>
            </tr>
          </thead>
         <tbody>
           {
             this.state.students.map(student => (
               <tr key={student.id}>
               <td>{student.fullName}</td>
               </tr>
             ))
           }
         </tbody>
        </table>
      </div>
    )
  }
}
  //PREVIOUS CODE
//   async componentDidMount() {
//     try {
//       const { data } = await axios.get('/student') //always destructure - take a piece out
//       //const students = res
//       this.setState({students: data})
//       console.log('Component Mounted: ', students)
//     } catch (err){
//       console.log('There was an error mounting component: ' + err)
//     }
//   }

// render(){
//   return (
//     <div>
//     <h1>Students</h1>
//     <ul>
//     {this.state.students.map(student => {
//      return <li key={student.id} >
//       {student.firstName} {student.lastName}
//       </li>;
//     })}
//     </ul>
//     </div>
//   )
//   }
// }



//   import React from 'react'
//   import ContactRow from './ContactRow'


//   const Students =(props)=>{
//       const studentName = props.students.firstname + props.students.lastname

//   return(
//       <table>
//       <tbody>
//         <tr>
//           <th>Name</th>
//           <th>Phone</th>
//           <th>Email</th>
//         </tr>
//         {contacts.map(contact=>{return (
//             <ContactRow row={contact} selectContact={selectContact}/>
//           )}
//         )}
//       </tbody>
//     </table>
//   )
//   }


