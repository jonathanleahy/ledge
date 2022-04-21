import * as React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";

type Props = {

};

export const TransactionDateEntry = (props: Props) => {

    const [startDate, setStartDate] = useState(new Date());

    return (
            <div className="card w-full max-w-sm shadow-2xl bg-base-100 show-overflow h-full">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <DatePicker className="w-full input input-bordered" selected={startDate}
                                    onChange={(date: Date) => setStartDate(date)}/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Amount</span>
                        </label>
                        <input type="text" placeholder="amount" className="input input-bordered"/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Deposit</button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn">Withdrawal</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};