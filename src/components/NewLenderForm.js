import React, { useState, useEffect, useRef } from "react";
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
import PropertyTypes from "./PropertyTypes";
import LoanProducts from "./LoanProducts";
import PrepaymentPenalty from "./PrepaymentPenalty";
import BorrowerEligibility from "./BorrowerEligibility";
import BorrowerCreditScore from "./BorrowerCreditScore";
import GeoParameter from "./GeoParameter";

function NewLenderForm(props) {
  const [bank, setBank] = useState("");
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [nameClicked, setNameClicked] = useState(false);

  const [selectedStates, setSelectedStates] = useState([]);
  const [statesClicked, setStatesClicked] = useState(false);

  const [selectedGeoParameter, setSelectedGeoParameter] = useState("");
  
  const [selectedCounties, setSelectedCounties] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [countiesClicked, setCountiesClicked] = useState(false);

  const [selectedRadius, setSelectedRadius] = useState(0);
  const [radiusClicked, setRadiusClicked] = useState(false);

  const [selectedMaxLoan, setSelectedMaxLoan] = useState(0.0);
  const [selectedMinLoan, setSelectedMinLoan] = useState(0.0);
  const [MaxMinClicked, setMaxMinClicked] = useState(false);

  const [selectedLTV, setSelectedLTV] = useState(0.0);
  const [selectedLTC, setSelectedLTC] = useState(0.0);
  const [ltcClicked, setLtcClicked] = useState(false);

  const [selectedIndexType, setSelectedIndexType] = useState("");
  const [baseRateSelected, setBaseRateSelected] = useState(false);
  const [selectedBPS, setSelectedBPS] = useState(0);
  const [selectedBaseRate, setSelectedBaseRate] = useState(0.0);
  const [selectedAboveBase, setSelectedAboveBase] = useState(0.0);
  const [indexTypeClicked, setIndexTypeClicked] = useState(false);
  
  const [selectedAmortization, setSelectedAmortization] = useState(0);
  const [selectedLoanTerm, setSelectedLoanTerm] = useState(0.0);
  const [selectedRecourse, setSelectedRecourse] = useState(false);
  const [amortizationClicked, setAmortizationClicked] = useState(false);
  
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [propertyTypesClicked, setPropertyTypesClicked] = useState(false);
  
  const [selectedLoanProducts, setSelectedLoanProducts] = useState([]);
  const [loanProductsClicked, setLoanProductsClicked] = useState(false);
  
  const [selectedPrepaymentPenalty, setSelectedPrepaymentPenalty] = useState([]);
  const [prepaymentPenaltyClicked, setPrepaymentPenaltyClicked] = useState(false);
  
  const [selectedBorrowerEligibility, setSelectedBorrowerEligibility] = useState([]);
  const [borrowerEligibilityClicked, setBorrowerEligibilityClicked] = useState(false);
  
  const [selectedBorrowerCreditScore, setSelectedBorrowerCreditScore] = useState(0);
  const [creditScoreClicked, setCreditScoreClicked] = useState(false);
  
  //Objects to pass in to POST request
  const stateArr = selectedStates.map((ele) => ele.value);
  const countyArr = selectedCounties.map((ele) => ele.value);
  const cityArr = selectedCities.map((ele) => ele.value);
  const lenderRadius = parseInt(selectedRadius);
  const maxLoanAmt = parseInt(selectedMaxLoan);
  const minLoanAmt = parseInt(selectedMinLoan);
  const LTV = parseFloat(selectedLTV);
  const LTC = parseFloat(selectedLTC);
  const Bps = parseInt(selectedBPS)
  const propertyTypesArr = selectedPropertyTypes.map((ele) => ele.value);
  const loanProductsArr = selectedLoanProducts.map((ele) => ele.value);
  const prepaymentPenaltyArr = selectedPrepaymentPenalty.map((ele) => ele.value);
  const borrowerEligibilityArr = selectedBorrowerEligibility.map((ele) => ele.value);

  const bottomRef = useRef(null)
  useEffect(() => {
    bottomRef.current.scrollIntoView({behavior: "smooth"})
  }, [nameClicked, statesClicked, countiesClicked, radiusClicked, MaxMinClicked, ltcClicked, indexTypeClicked, baseRateSelected, amortizationClicked, propertyTypesClicked, loanProductsClicked, prepaymentPenaltyClicked, borrowerEligibilityClicked])

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
  const renderPropertyTypes = () => {
    setAmortizationClicked(true);
  };
  const renderLoanProducts = () => {
    setPropertyTypesClicked(true);
  };
  const renderPrepaymentPenalty = () => {
    setLoanProductsClicked(true);
  };
  const renderBorrowerEligibility = () => {
    setPrepaymentPenaltyClicked(true);
  };
  const renderBorrowerCreditScore = () => {
    setBorrowerEligibilityClicked(true);
  };
  const renderSummary = () => {
    setCreditScoreClicked(true);
  };

  const renderConditional = () => {
    switch (selectedGeoParameter) {
      case "state":
        return (
          <button type="button" onClick={renderRadius}>
            Next
          </button>
        )
        break;
      case "counties":
        return (
          <>
          <SelectCounties
          selectedStates={selectedStates}
          selectedCounties={selectedCounties}
          setSelectedCounties={setSelectedCounties}
          />
          <button type="button" onClick={renderRadius}>
              Next
          </button>
          </>
          )
        break;
      case "radius":
        return(
        <>
        <SelectRadius
          selectedRadius={selectedRadius}
          setSelectedRadius={setSelectedRadius}
          />
        <button type="button" onClick={renderRadius}>
          Next
        </button>
        </>
        )
        break;
      case "cities":
        return (
          <>
          <SelectCities
          selectedStates={selectedStates}
          selectedCities={selectedCities}
          setSelectedCities={setSelectedCities}
          />
          <button type="button" onClick={renderRadius}>
              Next
          </button>
          </>
        )
          break;
      default:
        break;
    }
  }

  const baseRateConditional = () => {
    if (selectedIndexType === "Base Rate") {
      return(
        <>
        <BaseRate 
          selectedBaseRate={selectedBaseRate} 
          setSelectedBaseRate={setSelectedBaseRate}
        />
        <AboveBase 
          selectedAboveBase={selectedAboveBase} 
          setSelectedAboveBase={setSelectedAboveBase}
        />
        </>
      )
    } else if (selectedIndexType === "") return null
    else {
      return (
        <BPS 
          selectedBPS={selectedBPS} 
          setSelectedBPS={setSelectedBPS} 
        />
      )
    }
  }

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
        cities: cityArr,
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
        recourse: selectedRecourse,
        property_types: propertyTypesArr,
        loan_products: loanProductsArr,
        prepayment_penalty: prepaymentPenaltyArr,
        borrower_eligibility: borrowerEligibilityArr,
        borrower_credit_score: selectedBorrowerCreditScore
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then(props.history.push("/submitted"));

    //   props.history.push("/submitted")
    
  };

  return (
    <div className="parent">
      <form onSubmit={submitHandler}>
        <div className="inputs">
        <label>Bank Name:</label>
        <input
          name="name"
          type="text"
          placeholder="ie Chase, National"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />
        <br />
        <label>Your Name:</label>
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <br />
        <label>Phone Number:</label>
        <input
          name="phone"
          type="tel"
          placeholder="xxx-xxx-xxxx"
          // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
          <br />
        <label>Email:</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <br />
        <label>Website URL:</label>
        <input
          name="website"
          type="text"
          placeholder="Website URL"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          />
        <br />
        </div>
        <button type="button" onClick={renderStatesSubmit}>
          Next
        </button>
        {nameClicked ? (
          <>
            <SelectStates
              selectedStates={selectedStates}
              setSelectedStates={setSelectedStates}
            />
            <button type="button" onClick={renderCounties}>
              Next
            </button>
          </>
        ) : null}
        {statesClicked ? (
          <>
            <GeoParameter
              selectedGeoParameter={selectedGeoParameter}
              setSelectedGeoParameter={setSelectedGeoParameter}
            />
            {renderConditional()}
          </>
        ) : null}
        {countiesClicked ? ( //radiusClicked
          <>
            <MinLoanAmt
              selectedMinLoan={selectedMinLoan}
              setSelectedMinLoan={setSelectedMinLoan}
            />
            <MaxLoanAmt
              selectedMaxLoan={selectedMaxLoan}
              setSelectedMaxLoan={setSelectedMaxLoan}
            />

            <button type="button" onClick={renderLTV}>
              Next
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
            {baseRateConditional()}
            <button type="button" onClick={renderAmortization}>
              Next
            </button>
          </>
        ) : null}
        {indexTypeClicked ? ( 
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
            <button type="button" onClick={renderPropertyTypes}>
              Next
            </button>
          </>
        ) : null}
        {amortizationClicked ? ( 
          <>
            <PropertyTypes
              selectedPropertyTypes={selectedPropertyTypes}
              setSelectedPropertyTypes={setSelectedPropertyTypes}
            />    
            <button type="button" onClick={renderLoanProducts}>
              Next
            </button>
          </>
        ) : null}
        {propertyTypesClicked ? ( 
          <>
            <LoanProducts
              selectedLoanProducts={selectedLoanProducts}
              setSelectedLoanProducts={setSelectedLoanProducts}
            />
            <button type="button" onClick={renderPrepaymentPenalty}>
              Next
            </button>
          </>
        ) : null}
        {loanProductsClicked ? ( 
          <>
            <PrepaymentPenalty
              selectedPrepaymentPenalty={selectedPrepaymentPenalty}
              setSelectedPrepaymentPenalty={setSelectedPrepaymentPenalty}
            />
            <button type="button" onClick={renderBorrowerEligibility}>
              Next
            </button>
          </>
        ) : null}
        {prepaymentPenaltyClicked ? ( 
          <>
            <BorrowerEligibility
              selectedBorrowerEligibility={selectedBorrowerEligibility}
              setSelectedBorrowerEligibility={setSelectedBorrowerEligibility}
            />
            <button type="button" onClick={renderBorrowerCreditScore}>
              Next
            </button>
          </>
        ) : null}
        {borrowerEligibilityClicked ? ( 
          <>
            <BorrowerCreditScore
              selectedBorrowerCreditScore={selectedBorrowerCreditScore}
              setSelectedBorrowerCreditScore={setSelectedBorrowerCreditScore}
            />
            <button type="button" onClick={renderSummary}>
              View Summary
            </button>
          </>
        ) : null}
        
        {creditScoreClicked ? //creditScoreClicked
          (
            <div className="summary">
            <h4>Please review and scroll back up to make any edits before submitting:</h4>
            {bank ? <h5>Bank Name: {bank}</h5> : null}
            {fullName ? <h5>Full Name: {fullName}</h5> : null}
            {phone ? <h5>Phone: {phone}</h5> : null}
            {email ? <h5>Email: {email}</h5> : null}
            {website ? <h5>Website: {website}</h5> : null}
            {selectedStates.length > 0 ? <h5>Selected States: {selectedStates.map(ele => ele.value).join(" , ")}</h5> : null} 
            {selectedCounties.length > 0 ? <h5>Selected Counties: {selectedCounties.map(ele => ele.value).join(" / ")}</h5> : null} 
            {selectedCities.length > 0 ? <h5>Selected Cities: {selectedCities.map(ele => ele.value).join(" / ")}</h5> : null} 
            {selectedRadius ? <h5>Radius from nearest branch: {selectedRadius} Miles</h5> : null}
            {selectedMinLoan ? <h5>Min Loan: ${selectedMinLoan} MM</h5> : null}
            {selectedMaxLoan ? <h5>Max Loan: ${selectedMaxLoan} MM</h5> : null}
            {selectedLTV ? <h5>LTV: {selectedLTV * 100}% </h5> : null}
            {selectedLTC ? <h5>LTC: {selectedLTC * 100}% </h5> : null}
            {selectedIndexType ? <h5>Index Type: {selectedIndexType} </h5> : null}
            {selectedBPS ? <h5>BPS: {selectedBPS} bps</h5> : null}
            {selectedBaseRate ? <h5>Base Rate: {selectedBaseRate * 100}% </h5> : null}
            {selectedAboveBase ? <h5>Above Base: {selectedAboveBase * 100}% </h5> : null}
            {selectedAmortization ? <h5>Amortization: {selectedAmortization} years</h5> : null}
            {selectedLoanTerm ? <h5>Loan Term: {selectedLoanTerm === "1.0" ? "1 year" : `${selectedLoanTerm} years`}</h5> : null}
            {selectedRecourse ? <h5>Recourse: {selectedRecourse === "true" ? "YES" : "NO"}</h5> : null}
            {selectedPropertyTypes.length > 0 ? <h5>Selected Property Types: {selectedPropertyTypes.map(ele => ele.value).join(", ")}</h5> : null} 
            {selectedLoanProducts.length > 0 ? <h5>Selected Loan Products: {selectedLoanProducts.map(ele => ele.value).join(", ")}</h5> : null} 
            {selectedPrepaymentPenalty.length > 0 ? <h5>Selected Prepayment Penalty: {selectedPrepaymentPenalty.map(ele => ele.value).join(", ")}</h5> : null} 
            {selectedBorrowerEligibility.length > 0 ? <h5>Selected Borrower Eligibility: {selectedBorrowerEligibility.map(ele => ele.value).join(", ")}</h5> : null} 
            {selectedBorrowerCreditScore ? <h5>Credit Score: {selectedBorrowerCreditScore}</h5> : null}
            {/* {phone ? <h5>Phone: {phone}</h5> : null} */}
            
            <button type="submit" >Confirm and Submit!</button>
          </div>
          ) 
          :null
        }
        <br />
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div ref={bottomRef}/>
    </div>
  );
}

export default withRouter(NewLenderForm)
