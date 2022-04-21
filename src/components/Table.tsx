import * as React from 'react';

type Props = {

};

export const Table = (props: Props) => {
    return (
        <div className="overflow-x-auto">
            <table className="table w-full prose-xl">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Job</th>
                    <th>Job</th>
                    <th>Job</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>Blue</td>
                    <td>Red</td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                    <td>Purple</td>
                    <td>Red</td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>Red</td>
                    <td>Red</td>
                </tr>
                <tr>
                    <th>4</th>
                    <td>ABrice Swyre</td>
                    <td>BTax Accountant</td>
                    <td>Ced</td>
                    <td>Red</td>
                    <td>Red</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};