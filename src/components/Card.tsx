import * as React from 'react';
import DatePicker from "react-datepicker";

type Props = {

};

export const Card = (props: Props) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl h-full">
            <figure><img src="money-shutterstock.jpg" alt="Shoes"/></figure>
            <div className="stats shadow">
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="inline-block w-8 h-8 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div className="stat-title">Current Balance</div>
                <div className="stat-value">£31,000</div>
                <div className="stat-desc">Jan 1st</div>
            </div>
        </div>
    );
};