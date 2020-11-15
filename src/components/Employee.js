import React from "react";


function Employee ({users}) {
    function Date(date) {
        const dateArr = date.split("-");
        const year = dateArr[0];
        const month = dateArr[1];
        const dayArr = dateArr[2].split("T");
        const day = dayArr[0];
        const formatDate = [month, day, year].join("-");
        return formatDate;
    }

    return(
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? (
                users.map(({login, name, dob, picture, phone, email}) => {
                    return (
                        <tr key={login.uuid}>
                            <td className="align-middle">
                                <img src={picture.medium}
                                alt="employee"
                                className="img-responsive rounded mx-auto d-block"
                                />
                            </td>
                            <td className="text-capitalize text-center">
                                {name.first} {name.last}
                            </td>
                            <td className="text-center">
                                {Date(dob.date)}
                            </td>
                            <td className="text-center">
                                <a href={"mailto:" + email} target="__blank">
                                    {email}
                                </a>
                            </td>
                            <td className="text-center">
                                {phone}
                            </td>
                        </tr>
                    );
                })
            ) : (
                <></>
            )}
        </tbody>
    );
}

export default Employee;