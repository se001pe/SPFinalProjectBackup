"use client";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { MdOutlineArrowCircleUp } from "react-icons/md";
import { MdOutlineArrowCircleDown } from "react-icons/md";
import React from 'react';

interface CustomAccordionProps {
    title: string;
    content: string | React.ReactNode;
}
const AccordionUI = ( { title, content }:  CustomAccordionProps) => {
return (
<div>
<Accordion>
<AccordionSummary
expandIcon={<MdOutlineArrowCircleDown />}
aria-controls="panel1-content"
id="panel1-header"
>
<Typography component="span">{title}</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>{content}</Typography>
</AccordionDetails>
</Accordion>

</div>
);
};
export default AccordionUI;