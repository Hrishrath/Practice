import React from 'react'
import Form from './form';

const app = () => {
    const dialogWidth = {
        xs: "200px",
        sm: "350px",
        md: "350px",
        lg: "460px",
    };

    const minDialogWidth = {
        xs: 330,
        sm: 330,
        md: 500,
        lg: 500,
    };

    const maxDialogWidth = {
        md: 1070,
        lg: 1070,
        xl: 1070,
    };

    const summaryPadding = {
        xs: 0,
        sm: 0,
        md: 0,
        lg: 25,
        xl: 25,
    };

    const iconWrapperMargin = {
        xs: "10px 5px 5px",
        sm: 10,
        md: 15,
        lg: 15,
        xl: 15,
    };
    const iconWrapperMinWidth = {
        xs: 50,
        sm: 100,
        md: 100,
    };
    return (
        <div>
            <Form />
        </div>
    )
}

export default app