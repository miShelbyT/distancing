import React, { useState } from "react";
import {withRouter} from "react-router-dom"

import SelectStates from "./SelectStates";
import SelectCounties from "./SelectCounties";
import SelectCities from "./SelectCities";
import SelectRadius from "./SelectRadius";
import MaxLoanAmt from "./MaxLoanAmt";
import MinLoanAmt from "./MinLoanAmt";
import LtvLtc from "./LtvLtc";
import IndexType from "./IndexType";
import BPS from "./BPS";
import BaseRate from "./BaseRate";
import AboveBase from "./AboveBase";
import Amortization from "./Amortization";
import LoanTerm from "./LoanTerm";
import Recourse from "./Recourse";

function NewLenderForm(props) {
  const [bank, setBank] = useState("");
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [nameClicked, setNameClicked] = useState(false);

  const [selectedStates, setSelectedStates] = useState([]);
  const [statesClicked, setStatesClicked] = useState(false);

  const [selectedCounties, setSelectedCounties] = useState([]);
  const [countiesClicked, setCountiesClicked] = useState(false);

  const [selectedRadius, setSelectedRadius] = useState(0);
  const [radiusClicked, setRadiusClicked] = useState(false);

  const [selectedMaxLoan, setSelectedMaxLoan] = useState(0);
  const [selectedMinLoan, setSelectedMinLoan] = useState(0);
  const [MaxMinClicked, setMaxMinClicked] = useState(false);

  const [selectedLTV, setSelectedLTV] = useState(0.0);
  const [selectedLTC, setSelectedLTC] = useState(0.0);
  const [ltcClicked, setLtcClicked] = useState(false);

  const [selectedIndexType, setSelectedIndexType] = useState("");
  const [selectedBPS, setSelectedBPS] = useState(0);
  const [selectedBaseRate, setSelectedBaseRate] = useState(0.0);
  const [selectedAboveBase, setSelectedAboveBase] = useState(0.0);
  const [indexTypeClicked, setIndexTypeClicked] = useState(false);
  
  const [selectedAmortization, setSelectedAmortization] = useState(0);
  const [selectedLoanTerm, setSelectedLoanTerm] = useState(0.0);
  const [selectedRecourse, setSelectedRecourse] = useState(false);
  
  //Objects to pass in to POST request
  const stateArr = selectedStates.map((ele) => ele.value);
  const countyArr = selectedCounties.map((ele) => ele.value);
  const lenderRadius = parseInt(selectedRadius);
  const maxLoanAmt = parseInt(selectedMaxLoan);
  const minLoanAmt = parseInt(selectedMinLoan);
  const LTV = parseFloat(selectedLTV);
  const LTC = parseFloat(selectedLTC);
  const Bps = parseInt(selectedBPS)

  const renderStatesSubmit = () => {
    setNameClicked(true);
  };
  const renderCounties = () => {
    setStatesClicked(true);
  };
  const renderRadius = () => {
    setCountiesClicked(true);
  };
  const renderMaxLoan = () => {
    setRadiusClicked(true);
  };
  const renderLTV = () => {
    if (maxLoanAmt < minLoanAmt) {
      window.alert("Max Loan amt must be greater that Min");
    } else setMaxMinClicked(true);
  };

  const renderIndexType = () => {
    setLtcClicked(true);
  };

  const renderAmortization = () => {
    setIndexTypeClicked(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(stateArr);
    fetch("http://localhost:3000/lenders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: bank,
        full_name: fullName,
        phone: phone,
        email: email,
        website: website,
        provinces: stateArr,
        counties: countyArr,
        radius: lenderRadius,
        max_loan_amt: maxLoanAmt,
        min_loan_amt: minLoanAmt,
        ltv: LTV,
        ltc: LTC,
        index_type: selectedIndexType,
        bps: Bps,
        base_rate: selectedBaseRate,
        above_base: selectedAboveBase,
        amortization: selectedAmortization,
        loan_term: selectedLoanTerm,
        recourse: selectedRecourse
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then(props.history.push("/submitted"));

    //   props.history.push("/submitted")
    
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Bank Name:</label>
        <input
          name="name"
          type="text"
          placeholder="ie Chase, National"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Format: 123-456-7890"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          name="website"
          type="text"
          placeholder="Website URL"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <button type="button" onClick={renderStatesSubmit}>
          View States
        </button>
        {nameClicked ? (
          <>
            <SelectStates
              selectedStates={selectedStates}
              setSelectedStates={setSelectedStates}
            />
            <button type="button" onClick={renderCounties}>
              View Counties
            </button>
          </>
        ) : null}
        {statesClicked ? (
          <>
            <SelectCounties
              selectedStates={selectedStates}
              selectedCounties={selectedCounties}
              setSelectedCounties={setSelectedCounties}
            />
            <h4>OR</h4>
            <SelectCities
            // selectedStates={selectedStates}
            // selectedCounties={selectedCounties}
            // setSelectedCounties={setSelectedCounties}
            />
            <button type="button" onClick={renderRadius}>
              View Radius
            </button>
          </>
        ) : null}
        {countiesClicked ? (
          <>
            <SelectRadius
              selectedRadius={selectedRadius}
              setSelectedRadius={setSelectedRadius}
            />
            <button type="button" onClick={renderMaxLoan}>
              View Max Loan amt
            </button>
          </>
        ) : null}
        {radiusClicked ? (
          <>
            <MaxLoanAmt
              selectedMaxLoan={selectedMaxLoan}
              setSelectedMaxLoan={setSelectedMaxLoan}
            />
            <MinLoanAmt
              selectedMinLoan={selectedMinLoan}
              setSelectedMinLoan={setSelectedMinLoan}
            />

            <button type="button" onClick={renderLTV}>
              View LTV / LTC
            </button>
          </>
        ) : null}
        {MaxMinClicked ? (
          <>
            <LtvLtc
              selectedLTV={selectedLTV}
              setSelectedLTV={setSelectedLTV}
              selectedLTC={selectedLTC}
              setSelectedLTC={setSelectedLTC}
            />
            <button type="button" onClick={renderIndexType}>
              Next
            </button>
          </>
        ) : null}
       
        {ltcClicked ? ( 
          <>
            <IndexType
              selectedIndexType={selectedIndexType}
              setSelectedIndexType={setSelectedIndexType}
            />
            <BPS 
              selectedBPS={selectedBPS} 
              setSelectedBPS={setSelectedBPS} 
            />
            <BaseRate 
              selectedBaseRate={selectedBaseRate} 
              setSelectedBaseRate={setSelectedBaseRate}
            />
            <AboveBase 
              selectedAboveBase={selectedAboveBase} 
              setSelectedAboveBase={setSelectedAboveBase}
            />
            <button type="button" onClick={renderAmortization}>
              Next
            </button>
          </>
        ) : null}
        {true ? ( //indexTypeClicked 
          <>
            <Amortization
              selectedAmortization={selectedAmortization}
              setSelectedAmortization={setSelectedAmortization}
            />
            <LoanTerm
              selectedLoanTerm={selectedLoanTerm}
              setSelectedLoanTerm={setSelectedLoanTerm}
            />
            <Recourse
              selectedRecourse={selectedRecourse}
              setSelectedRecourse={setSelectedRecourse}
            />
            <button type="button">
              Next
            </button>
          </>
        ) : null}
        <br />
        <button type="submit" >Outer Submit</button>
      </form>
    </div>
  );
}

export default withRouter(NewLenderForm)
