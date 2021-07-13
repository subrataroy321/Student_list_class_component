import React, { Component } from 'react';
import './StudentList.css'

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

    componentWillMount() {
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

    
    addNewStudent(){
        var newStudent = {
            class: this.state.studentClass, 
            division: this.state.division, 
            roll_no: this.state.roll_no, 
            name: this.state.name,
            address: this.state.address,
            contact_email: this.state.email,
            contact_phone: this.state.phone,
            math: this.state.math,
            science: this.state.science,
            english: this.state.english
    
        }
        var data = this.state.studentArray;
        if (!this.state.isEdited && data.filter(student => student.roll_no !== this.state.roll_no)) {
            this.setState({studentArray: [newStudent, ...this.state.studentArray]});
            this.cancelEditing()
        }else {
            this.updateStudent()
        }
    }

    editStudent(student) {
        this.setState({
            isAdding: true,
            isEdited: true,
            studentClass: student.class,
            division: student.division,
            roll_no: student.roll_no,
            name: student.name,
            address: student.address,
            email: student.contact_email,
            phone: student.contact_phone,
            math: student.math,
            science: student.science,
            english: student.english,
        })
    }

    cancelEditing() {
        this.setState({
            isAdding: false,
            isEdited: false,
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
        })
    }

    updateStudent() {
        var data = this.state.studentArray;
        var indexOfStudent = data.findIndex(student => student.roll_no === this.state.roll_no)
        if (indexOfStudent !== null) {
            data[indexOfStudent].class = this.state.studentClass;
            data[indexOfStudent].division = this.state.division;
            data[indexOfStudent].name = this.state.name;
            data[indexOfStudent].address = this.state.address;
            data[indexOfStudent].contact_email = this.state.email;
            data[indexOfStudent].contact_phone = this.state.phone;
            data[indexOfStudent].math = this.state.math;
            data[indexOfStudent].science = this.state.science;
            data[indexOfStudent].english = this.state.english;

        }
        this.setState({studentArray: data});
        this.cancelEditing()
    }

    deleteStudent(e){
        if (this.state.roll_no && e.target.value === "delete") {
            var data = this.state.studentArray;
            data = data.filter(student => student.roll_no !== this.state.roll_no)
            this.setState({studentArray: data});

        }
        this.setState({displayPopUp: "none"});
    }

    showPopUp(roll_no) {
        this.setState({displayPopUp: 'block'});
        this.setState({ roll_no: roll_no});
    }

    // window.onClick = function(event) {
    //     if (event.target.id === "myModal") {
    //       this.setState({displayPopUp: "none"});
    //     }
    //   }

    render() {
        return (
            <div className="main-container">
                <input type="button" value="Add a Student" className="btn btn-dark" style={{ marginBottom: "20px"}} onClick={() => this.state.isAdding ? this.setState({isAdding: false}) : this.setState({isAdding: true}) && this.generateRollNo()}/>
                <div style={{display: `${this.state.isAdding ? "" : "none"}`}}>
                    <div className="add-student">
                        <table className="table">
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>Roll No</td>
                                    <td>
                                        <input type="number" name="roll_no" className="form-control" value={this.state.roll_no} onChange={(e)=> this.setState({roll_no: e.target.value})} readOnly="true"/>
                                    </td>
                                    <td>Class</td>
                                    <td>
                                        <input type="text" name="class" className="form-control" value={this.state.studentClass} onChange={(e)=>this.setState({studentClass: e.target.value})} required/>
                                    </td>
                                    <td>Division</td>
                                    <td>
                                        <input type="text" name="division" className="form-control" value={this.state.division} onChange={(e)=>this.setState({division: e.target.value})} required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Full Name</td>
                                    <td colspan="6">
                                        <input type="text" name="name" className="form-control" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})} required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td colspan="6">
                                        <input type="text" name="address" className="form-control" value={this.state.address} onChange={(e)=>this.setState({address: e.target.value})}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Contact Email</td>
                                    <td colspan="3">
                                        <input type="email" name="email" className="form-control" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}/>
                                    </td>
                                    <td>Contact Phone</td>
                                    <td colspan="2">``
                                        <input type="text" name="phone" className="form-control" value={this.state.phone} onChange={(e)=>this.setState({phone: e.target.value})} required/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Math</td>
                                    <td>
                                        <input type="number" name="math" className="form-control" value={this.state.math} onChange={(e)=>this.setState({math: e.target.value})}/>
                                    </td>
                                    <td>Science</td>
                                    <td>
                                        <input type="number" name="science" className="form-control" value={this.state.science} onChange={(e)=>this.setState({science: e.target.value})}/>
                                    </td>
                                    <td>English</td>
                                    <td>
                                        <input type="number" name="english" className="form-control" value={this.state.english} onChange={(e)=>this.setState({english: e.target.value})}/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                            {
                                this.state.isEdited ? 
                                <div>
                                    <input type="button" value={this.state.isEdited? "Update" : "Add" } className={this.state.isEdited? "btn btn-danger" : "btn btn-primary"} onClick={() => this.addNewStudent()}/>
                                    <input type="button" value="Cancel" className="btn btn-light" onClick={() => this.cancelEditing()}/>
                                </div>
                                :
                                <input type="button" value={this.state.isEdited? "Update" : "Add" } className={this.state.isEdited? "btn btn-denger" : "btn btn-primary"} onClick={() => this.addNewStudent()}/>
                            }
                    </div>
                </div>
                <div className="student-table">
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
                </div>
                <div id="myModal" className="modal" style={{ display: `${this.state.displayPopUp}`}}>

                    <div className="modal-content">
                        <span className="close" onClick={() => this.setState({displayPopUp: "none"})}>&times;</span>
                        <h3>Do you want to delete?</h3>
                        <a>
                            <input type="button" className="btn btn-danger" style={{marginLeft: "20px", marginRight: "20px"}} value="delete" onClick={(e) => this.deleteStudent(e)}/>
                            <input type="button" className="btn btn-secondary"  style={{marginLeft: "20px", marginRight: "20px"}} value="cancel" onClick={() => this.setState({displayPopUp: "none"})}/>

                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default StudentList;