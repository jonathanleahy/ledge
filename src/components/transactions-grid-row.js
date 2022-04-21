import React from "react";
import '../style/transactions-grid.css';

const TransactionsGridRow = (props) => {
    return (
        <div>
            <div className='container'>
                <div className={`row ${props.isHeader ? 'table-header' : ''} ${props.isFooter ? 'table-footer' : ''}`}>
                    <div className="col-3">
                        {props.date}
                    </div>
                    <div className="col-3">
                        {props.creditordebit}
                    </div>
                    <div className="col-3">
                        {(typeof props.amount === 'number' && !Number.isNaN(props.amount)) &&
                            `£${props.amount}`}
                    </div>
                    <div className="col-3">
                        {(typeof props.balance === 'number' && !Number.isNaN(props.balance)) &&
                            `£${props.balance}`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionsGridRow