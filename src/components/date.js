import { ArrowDropDown } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDate = () => {
    const [date, setDate] = useState("");
    const [prevLen, setPrevLen] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    }

    const handleDateChange = () => {
        setIsOpen(false);
    }

    // 연월일중 월계산
    const checkMonth = (val) => {
        if (val === null) return '';
        if (val[0] === '0' && val[1] !== '1' && val.length > 1) {
            val = val.substring(1, 3);
        }
        let value = Number(val);
        if (value > 1 && value < 10) {
            return '0' + val;
        } else if (value > 12) {
            return 1;
        }
        return val;
    };

    // Date計算
    const checkDate = (year, month, date) => {
        let mon = Number(month);
        let dt = Number(date);
        let numForComparing = mon === 2 ? 2 : 3;
        let result = date;
        if (date.length === 1 && dt > numForComparing) {
            result = '0' + date[0];
        } else if (dt > getLastDate(year, mon)) {
            result = date[0];
        }
        return result;
    };

    // うるう日を含めてdate計算
    const getLastDate = (year, month) => {
        if (month === 2) {
        let y = Number(year);
        if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
            return 29;
        }
        return 28;
        } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        return 31;
        } else {
        return 30;
        }
    };

    const checkHourMinute = (val) => {
        if (val.length > 1) {
          return val;
        }
        let value = Number(val[0]);
        if (value > 5) {
          return '0' + val;
        }
        return val;
      };

    const handleDate = (e) => {
        const regex = /^[0-9\b]{0,12}$/;
        let value = e.target.value.replace(/\D/g, '');

        if (regex.test(value)) {
            let len = value.length;
            let result = '';
            if (len < 4) {
              result = value; 
            } else if (len === 4) {
                // yyyy
               if (prevLen === len) {
                result = value.substring(0, 3); 
              } else {
                result = value.substring(0, 4) + "/"; // ex. 1994
              }
            } else if (len === 5) {
                // yyyyM
                const year = value.substring(0, 4);
                result = year + "/" + checkMonth(value.substring(4))
            } else if (len === 6) {
                // yyyyMM
                const year = value.substring(0, 4)
                if(prevLen === len) {
                    result = year + "/" + checkMonth(value.substring(4, 5))
                } else {
                    const month = value.substring(4, 6)
                    result = year + "/" + checkMonth(month) + "/"
                }
            } else if (len === 7) {
                // yyyyMMd
                const year = value.substring(0, 4)
                const month = value.substring(4, 6)
                result = year + "/" + checkMonth(month) + "/" + checkDate(year, month, value.substring(6, 7))
            } else if (len === 8) {
                // yyyyMMdd
                const year = value.substring(0, 4)
                const month = value.substring(4, 6)
                if(prevLen === len) {
                    result = year + "/" + checkMonth(month) + "/" + checkDate(year, month, value.substring(6, 7))
                } else {
                    const day = value.substring(6);
                    result = year + "/" + checkMonth(month) + "/" + checkDate(year, month, day) + " "
                }
            } else if (len === 9) {
                // yyyyMMddH
                const year = value.substring(0, 4);
                const month = value.substring(4, 6);
                const day = value.substring(6, 8);
                result = year + "/" + checkMonth(month) + "/" + checkDate(year, month, day) + " " + checkHourMinute(value.substring(8))
            } else if (len === 10) {
                // yyyyMMddHH
                const year = value.substring(0, 4);
                const month = value.substring(4, 6);
                const day = value.substring(6, 8);
                if (prevLen === len) {
                    result = year + "/" + checkMonth(month) + "/" + checkDate(year, month, day) + " " + checkHourMinute(value.substring(8, 9))
                } else {
                    const hour = value.substring(8)
                    result = year + "/" + checkMonth(month) + "/" + checkDate(year, month, day) + " " + checkHourMinute(hour) + ":"
                }
            } else {
                // yyyyMMddHHm or yyyyMMddHHmm
                const year = value.substring(0, 4);
                const month = value.substring(4, 6);
                const day = value.substring(6, 8);
                const hour = value.substring(8, 10);
                const minute = value.substring(10);         
                result = year + "/" + checkMonth(month) + "/" + checkDate(year, month, day) + " " + checkHourMinute(hour) + ":" + checkHourMinute(minute)
            }
            setPrevLen(len);
            setDate(result);
        } 
    }

    const handleCurrentTimeClick = () => {
        const now = new Date();
        const formattedDate = `${now.getFullYear()}/${String(now.getMonth() + 1).padStart(2, '0')}/${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        setDate(formattedDate);
    }

    useEffect(() => {
        setPrevLen(date.replace(/\D/g, '').length);
    },[date])

    return(
        <div style={{ display: "flex", alignItems: "center", height: "30px", marginTop: "4px", marginLeft: "4px" }}>
            <div style={{ marginRight: "4px" }}>달력 컴포넌트 :</div>
            <TextField 
                sx={{
                    "& .MuiInputBase-root" : {
                        height: "30px"
                    }
                }}
                onChange={handleDate} 
                value={date}  
                InputProps={{
                endAdornment: (
                    <IconButton edge="end" onClick={handleClick} disableRipple>
                    <ArrowDropDown />
                    </IconButton>
                ),
                }}/>
            {isOpen ?? <DatePicker openToDate={new Date()} selected={date} onChange={handleDateChange}/> }
            <Button 
                onClick={handleCurrentTimeClick}
                sx={{ 
                    marginLeft: "4px" ,
                    height: "30px"
                }} 
                variant="contained">
                현재시각1111
            </Button>
        </div>
    )   
}

export default MyDate