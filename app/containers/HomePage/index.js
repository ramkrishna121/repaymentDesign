/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

import amountImg from '../../images/amount-icon.png';
import bulbImg from '../../images/bulb-icon.png';
import calImg from '../../images/cal-icon.png';
import dateImg from '../../images/date-icon.png';
import iImg from '../../images/i-icon.png';
import kbImg from '../../images/kb-icon.png';
import btnImg from '../../images/button-icon.png';




 const RescheduleText = styled.div`
  font-size: 14px;
  color: #797e96;
  margin-top: 10px;
  margin-left: 5%;
  margin-bottom: 10px;
  margin-top: 20px;
  padding-top: 35px;
`;

const RepaymentScheduleCon = styled.div`
    padding: 0% 5%;
    margin-bottom: 10px;
`;

const LabelCon = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    border: solid 1px #c8d0ef;
    background-color: #fff;
    text-align: start;
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
    > table {
        width: 100%;
        > tbody > tr > td {
            &:first-child {
                width: 30px;
                /* text-align: center; */
            }
            &:last-child {
                position: relative;
            }
            > img {
                width:16px;
                position: absolute;
                top: 6px;
                left: 8px;
            }
            > p {
                font-size: 12px;
                color: #6b6f86;
                margin: 0;
                font-weight: 500;
                line-height: 1.67;
                padding: 4px;
                margin-right: 30px;
            }
        }
    }  
`;

const InfoP = styled.p`
    font-size: 12px;
    color: #6b6f86;
    margin: 0;
    font-weight: 500;
    line-height: 1.67;
    padding: 4px;
    margin-right: 30px;
`;



const PayBtn = styled.button`
    height: 38px;
    ${props => props.greyBtn ?' color: #c0b9a5; border: solid 2px #dad4bb;' : ''}
    ${props => props.paid ? 'color: #229daf; border: solid 2px #229daf;' : ''}
    font-size: 12px;
    ${props => props.margin ?' margin: 5% 0;' : ''}
`;

const InstDetails = styled.table`
    margin: auto 0;
    & td {
        font-size: 12px;
        font-weight: 500;
        line-height: 2;
        color: #333333;
        position: relative;
        > i {
            font-size: 12px;
            display: inline-block;
            vertical-align: text-top;
            color: #797e96;
        }
    }
`;

const RepaymentCon = styled.div`
    padding: 10px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
`;

const InstallmentCard = styled(RepaymentCon)`
    padding: ${props => props.padding ? props.padding : '0'};
    display: flex;
    box-shadow: 0 0 0 0;
    position: relative;
    margin-bottom: 8px;
    margin-left: 5%;
    margin-right: 5%;
    /* border-top-left-radius: 12px;
    border-bottom-right-radius: 12px; */
    align-items: center;
    border: ${props => props.border ? props.border :''};
    & > i {
        position:absolute;
        font-size: 30px;
        right: 4px;
        top: 4px;
        color: #817cff;
    }
    & > div {
        height: 100%;
        border: solid 2px #dddddd;
    }
    &.active {
        border: solid 2px #f2b100;
    }
    &.active > div{
        border: solid 0px #f2b100;
        width: ${props => props.isEmiReschedulable ? '100%' : '86%'};
    }
`;

const ViewDiscRepayInfo = styled.p`
    margin-top: 0px;
    font-size: 10px;
    font-weight: 600;
    color: #f2b100;
    > i {
        position: relative;
        top: 1.1px;
    }
`;

const BottomText = styled.div`
color: #797e96;
font-size: 10px;
margin-left: 5%;
align-items : center;
text-align: start;
`;

const TopBox = styled.div`
background-color: white;
display: flex;
position: relative;
margin-left: 5%;
margin-right: 5%;
border : solid 2px #c8d0ef;
align-items:center;
/* border-top-left-radius: 12px;
border-bottom-right-radius: 12px; */
padding : 0 5%;

`;

const BoldLine = styled.div`
color: #000000;
font-size: 20px;
font-weight: bold;
`;

const BodyStyle = styled.table`
    margin: auto 0;
    & td {
        font-size: 12px;
        font-weight: 500;
        line-height: 2;
        color: #333333;
        position: relative;
        > i {
            font-size: 12px;
            display: inline-block;
            vertical-align: text-top;
            color: #797e96;
        }
    }
`;

const Nstyle = styled.div`
color: black;
font-size: 12px;
font-style: italic;
position: absolute;
top: 0;
right: 0;
text-align : center;
`;

const ShowStyle = styled.div`

font-style: inherit;
font-size: 12px;
position: absolute;
bottom: 0;
right: 0;
`;

const Kredit = styled.div`
font-size: 20px;
font-weight: bold;
background-color: whitesmoke;
height: 40px;;


width : 100%;
padding-left: 5%;
padding-bottom : 10px;
padding-top: 10px;

/* margin-right: 5%;
margin-left: 5%; */

&:focus {
  background: red;
}

`;

const Repayment = styled.div`
font-size: 10px;
font-weight: bold;
background-color: grey;
color: white;
height: 24px;
/* margin-right : 5%;
margin-left: 5%; */
/* margin-bottom: 10px; */
width: 100%;
padding-left : 5%;
padding-top : 7px;
padding-bottom: 7px;
`;

const TopBoxOuter = styled.div`
background-color : black;
height: 150px;
padding-top: 15px;
padding-bottom: 15px;
`;


export default function HomePage() {
  return (
    <div>
     

    <Kredit>
      <img src={kbImg} height = "30" width = "30" /> 
      kreditBee
    </Kredit>

    <Repayment>
      Repayment Details
    </Repayment>

<TopBoxOuter>
<TopBox>
          <table width = '100%'>
            <tbody>
              <tr>
                <td>
                  <BodyStyle>
                    <tbody>
                      <tr>
                        <td>
                        <img src={amountImg} />
                        <strong style = {{fontSize : '20px'}}>15,000</strong>

                        </td>
                        
                      </tr>
                      <tr>
                        <td><div>Instalment amount &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;   :7,860 </div></td>
                      </tr>
                      <tr>
                        <td><div>Total interest rate &nbsp;&nbsp;  &nbsp;&nbsp;   &nbsp;&nbsp;  &nbsp;&nbsp;  :952 </div></td>
                      </tr>
                      <tr>
                        <td><div>Annualised interest rate &nbsp;&nbsp;:28.95% p.a. </div></td>
                      </tr>
                      <tr>
                        <td><div>Disbursal amount  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;     :13,525 </div></td>
                      </tr>
                      <tr>
                        <td><div>Loan ID : KB18HSI78FHDIUH </div></td>
                      </tr>
                    </tbody>
                  </BodyStyle>
                </td>
                
                <td width = '20%'>
                  <tbody>
                    <tr>
                      <td><Nstyle>Next <br /> instalment <br /> in <br /><strong>21</strong> <br /> days</Nstyle></td>
                    </tr>
                    <tr>
                      <td><ShowStyle>Show More </ShowStyle></td>
                    </tr>
                  </tbody>
                </td>
              </tr>
            </tbody>
          </table>
        </TopBox>
</TopBoxOuter>
    


    
      <RescheduleText>
        <FormattedMessage {...messages.repaymentScheduleText}/>
        </RescheduleText>

        <RepaymentScheduleCon>
          <LabelCon>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img src={bulbImg} />
                  </td>
                  <td>
                    <InfoP>
                      Your loan has been serviced by our Partner <br />
                      <strong>Usha Financial Services Private Limited.</strong><br />
                      View Grievance Redressal Policy of <u style = {{color:'yellow'}}><strong style = {{color:'yellow'}}>Partner</strong></u> and<br />
                     <u style={{color:'yellow'}}><strong style={{color:'yellow'}}>kreditBee</strong></u>
                    </InfoP>
                  </td>
                </tr>
              </tbody>
            </table>
          </LabelCon>
        </RepaymentScheduleCon>


        <InstallmentCard padding = { '0 5%'} border = 'solid 2px #c8d0ef'>
          <table width= '100%'>
            <tbody>
              <tr>
                <td>
                  <InstDetails>
                    <tbody>
                      <tr>
                        <td >
                          <img src={calImg} />
                          <strong style = {{fontSize:'18px'}}>2,100</strong> 
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={dateImg} />
                          05 Feb 2020
                          </td>
                      </tr>
                      <tr>
                        <ViewDiscRepayInfo >View Details ></ViewDiscRepayInfo>
                      </tr>
                    </tbody>
                  </InstDetails>
                </td>
                <td width='30%'>
                  <PayBtn paid margin style={{marginLeft:'10%'}}>PAID</PayBtn>
                </td>
              </tr>
            </tbody>
          </table>
        </InstallmentCard>

        <InstallmentCard padding = { '0 5%'} border = 'solid 2px #f2b100'>
          <table width= '100%'>
            <tbody>
              <tr>
                <td width = '10%'>
                  <img src={btnImg} />
                </td>
                <td>
                  <InstDetails>
                    <tbody>
                    <tr>
                        <td >
                          <img src={calImg} />
                          <strong style = {{fontSize:'18px'}}>2,100</strong> 
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={dateImg} />
                          05 Mar 2020
                          </td>
                      </tr>
                      <tr>
                        <ViewDiscRepayInfo>View Details ></ViewDiscRepayInfo>
                      </tr>
                    </tbody>
                  </InstDetails>
                </td>
                <td width='30%'>
                  <div>

                  </div>
                  <PayBtn  margin style={{backgroundColor:'white',border: 'solid 2px #f2b100'}}><strong>Postpone</strong></PayBtn>
                  <PayBtn  margin style = {{backgroundColor:'#f2b100',border: 'solid 2px #f2b100'}}><strong>PAY NOW</strong></PayBtn>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </InstallmentCard>

        <InstallmentCard padding = { '0 5%'} border = 'solid 2px #c8d0ef'>
          <table width= '100%'>
            <tbody>
              <tr>
                <td>
                  <InstDetails>
                    <tbody>
                    <tr>
                        <td >
                          <img src={calImg} />
                          <strong style = {{fontSize:'18px'}}>2,100</strong> 
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={dateImg} />
                          05 Apr 2020
                          </td>
                      </tr>
                      <tr>
                        <ViewDiscRepayInfo>View Details ></ViewDiscRepayInfo>
                      </tr>
                    </tbody>
                  </InstDetails>
                </td>
                <td width='30%'>
                  <PayBtn greyBtn margin>PAY NOW</PayBtn>
                </td>
              </tr>
            </tbody>
          </table>
        </InstallmentCard>

        <InstallmentCard padding = { '0 5%'} border = 'solid 2px #c8d0ef'>
          <table width= '100%'>
            <tbody>
              <tr>
                <td>
                  <InstDetails>
                    <tbody>
                    <tr>
                        <td >
                          <img src={calImg} />
                          <strong style = {{fontSize:'18px'}}>2,100</strong> 
                          </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={dateImg} />
                          05 May 2020
                          </td>
                      </tr>
                      <tr>
                        <ViewDiscRepayInfo>View Details ></ViewDiscRepayInfo>
                      </tr>
                    </tbody>
                  </InstDetails>
                </td>
                <td width='30%'>
                  <PayBtn greyBtn margin>PAY NOW</PayBtn>
                </td>
              </tr>
            </tbody>
          </table>
        </InstallmentCard>

        <BottomText>
          <table>
            <tbody>
              <tr>
                <td>
                <img src={iImg} />

                </td>
                <td>
                "Your last EMI amount may be different due to Daily"<br />
          method of Interest calculation and the difference in days <br />
          between Disbursment Date and first due date.
                </td>
              </tr>
            </tbody>
          </table>

          
          

        </BottomText>






       
    

    </div>
   

    
  );
}
