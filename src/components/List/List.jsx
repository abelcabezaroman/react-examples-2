export default function List({students}){
    // const studentsToPrint = [];
    // for (const student of students) {
    //     studentsToPrint.push(<li>{student}</li>)
    // }

    return (
        <ul>
            {/* {studentsToPrint} */}
            {students.map((student, index) => <li key={index}>{student}</li>)}
        </ul>
    )
}