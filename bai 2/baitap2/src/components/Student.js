import React from "react";

const students = [
    {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
]
export default function Student(){
    return <>
        <table>
            <tr>
                <td>Company</td>
                <td>Contact</td>
                <td>Country</td>
            </tr>
            {students.map(student => (
                <tr>
                    <td>{student.company}</td>
                    <td>{student.contact}</td>
                    <td>{student.country}</td>
                </tr>
            ))}

        </table>
    </>
}