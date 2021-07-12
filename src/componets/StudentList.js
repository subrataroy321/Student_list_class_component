import React, { Component } from 'react';

class StudentList extends Component{

    constructor(props) {
        super(props);

        this.state = {
            studentArray: [
                {
                    class: "V", 
                    division: "A", 
                    roll_no:140128, 
                    name: "Subrata Roy",
                    address: "Atlanta, GA",
                    contact_email: "subrata.roy@gmail.com",
                    contact_phone: "678-111-1234",
                    math: 95,
                    science: 96,
                    english: 98
        
                },
                {
                    class: "VI", 
                    division: "A", 
                    roll_no:223159, 
                    name: "Sajal Roy",
                    address: "Atlanta, GA",
                    contact_email: "sajal.roy@gmail.com",
                    contact_phone: "678-111-5678",
                    math: 95,
                    science: 86,
                    english: 91
        
                },
                {
                    class: "V", 
                    division: "A", 
                    roll_no:345123, 
                    name: "Priyanka Das",
                    address: "Atlanta, GA",
                    contact_email: "priyanka.das@gmail.com",
                    contact_phone: "678-111-9043",
                    math: 96,
                    science: 97,
                    english: 89
        
                }
            ],
            studentClass: '',
            division: '',
            roll_no: '',
            name: '',
            address: '',
            email: '',
            phone: '',
            math: 0,
            science: 0,
            english: 0,
            isEdited: false,
            isAdding: false,
            displayPopUp: 'none',

        };
    }

    // useEffect(() => {
    //     generateRollNo();
    // }, [this.state.isAdding])

    componentDidMount() {
        this.generateRollNo();
    }

    generateRollNo() {
        var roll = Math.floor(Math.random(1)*999999);
        console.log(roll)
        if (roll.toString().length === 6) {
            this.setState({roll_no: roll});
        }else {
            this.generateRollNo();
        }
    }

    editStudent() {

    }

    showPopUp() {

    }

    render() {
        return (
            <table className="table table-hover table-success">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Division</th>
                            <th>Roll No</th>
                            <th>Full Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Math</th>
                            <th>Science</th>
                            <th>Engish</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.studentArray.map((student, i) => 
                            <tr key={i}>
                                <td>{++i}</td>
                                <td>{student.class}</td>
                                <td>{student.division}</td>
                                <td>{student.roll_no}</td>
                                <td>{student.name}</td>
                                <td>{student.address}</td>
                                <td>{student.contact_email}</td>
                                <td>{student.contact_phone}</td>
                                <td>{student.math}</td>
                                <td>{student.science}</td>
                                <td>{student.english}</td>
                                <td>
                                    <input type="button" value="edit" className="btn btn-link" onClick={() => this.editStudent(student)}/>
                                </td>
                                <td>
                                    <input type="button" value="delete" className="btn btn-link" onClick={() => this.showPopUp(student.roll_no)}/>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
        )
    }
}

export default StudentList;