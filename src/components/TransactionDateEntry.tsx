import * as React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import {decrementByAmount, incrementByAmount} from "../features/ledger/ledgerSlice";
import {useAppDispatch} from "../app/hooks";
import {hideErrorModal, showErrorModal} from "../features/error-modal/errorModalSlice";

type Props = {
    date: Date,
    value: string
};

export const TransactionDateEntry = (props: Props) => {

    const dispatch = useAppDispatch();

    const [startDate, setStartDate] = useState(new Date(props.date));
    const [amount, setAmount] = useState(props.value);

    const onDepositClicked = async () => {
        await dispatch(incrementByAmount({value: parseFloat(amount), date: startDate}))
    }

    const onWithdrawalClicked = async () => {
        await dispatch(decrementByAmount({value: parseFloat(amount), date: startDate}))
        // const response = await dispatch(hideErrorModal({value: 22}))
        // dispatch(showErrorModal({value: 22}))
    }

    return (
            <div className="card w-full max-w-sm shadow-2xl bg-base-100 show-overflow h-full">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date:</span>
                        </label>
                        <DatePicker className="w-full input input-bordered" selected={startDate}
                                    dateFormat="dd/MM/yyyy"
                                    onChange={(date: Date) => setStartDate(date)}/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Amount £:</span>
                        </label>
                        <input type="text" value={amount} placeholder="amount" className="input input-bordered"
                               onChange={(e) => setAmount(e.target.value)}/>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-control mt-6">
                            <button className="btn btn-primary"
                                    onClick={onDepositClicked}
                            >Deposit</button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn"
                                    onClick={onWithdrawalClicked}
                            >Withdrawal</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};