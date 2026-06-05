
export default function signupPage() {
  return (
    <>
      
    
    <div id="preloader">
        <div className="preloader-wrap">
            <img src="assets/img/nio.png" alt="logo" style={{ maxWidth: '160px' }} className="img-fluid" />
            <div className="preloader">
                <i>.</i>
                <i>.</i>
                <i>.</i>
            </div>
        </div>
    </div>
    
    <section className="page-header-section ptb-100 bg-image full-height" data-overlay="8">
        <div className="background-image-wraper" style={{ background: 'url(assets/img/offer-bg-4.jpg)' }}>
        </div>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-md-9 col-lg-7">
                    <div className="login-signup-wrap p-5 gray-light-bg rounded shadow">
                        <div className="login-signup-header text-center">
                            <a href="/index"><img src="assets/img/nio.png" className="img-fluid mb-3" alt="Logo" /></a>
                            <h5 className="mb-5">Create Your Account</h5>
                        </div>

                        <form action="https://portal.lightcloud.my/register.php" method="post" name="orderfrm" className="login-signup-form">
                            <h6 className="mb-3">Personal Information</h6>
                            <div className="row mb-5">
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        
                                        <label htmlFor="firstname" className="pb-1">First name</label>
                                        <div className="input-group input-group-merge">
                                            <div className="input-icon">
                                                <span className="fas fa-user-tie"></span>
                                            </div>

                                            <input type="text" name="firstname" id="firstname" className="form-control" placeholder="First Name" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="inputLastName" className="pb-1">Last name</label>
                                        <div className="input-group input-group-merge">
                                            <div className="input-icon">
                                                <span className="fas fa-user-tie"></span>
                                            </div>
                                            <input type="text" name="lastname" id="inputLastName" className="form-control" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 ">
                                    <div className="form-group mb-3">
                                        <label htmlFor="inputEmail" className="pb-1">Email</label>
                                        <div className="input-group input-group-merge">
                                            <div className="input-icon">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                            <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email Address" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mb-3">
                                        <label htmlFor="phonenumber" className="pb-1">Phone</label>
                                        <div className="input-group input-group-merge">
                                            <div className="input-icon">
                                                <span className="fas fa-phone"></span>
                                            </div>
                                            <input type="tel" name="phonenumber" id="inputPhone" className="form-control" placeholder="Phone Number" required />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h6 className="mb-3 mt-3">Billing Address</h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="inputCompanyName" className="pb-2">Company Name</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <span className="fas fa-building"></span>
                                                </div>
                                                <input type="text" name="companyname" id="inputCompanyName" className="form-control" placeholder="Company Name (Optional)" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="inputAddress1" className="pb-2">Address 1</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <span className="fas fa-building"></span>
                                                </div>
                                                <input type="text" name="address1" id="inputAddress1" className="form-control" placeholder="Street Address" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group mb-3">
                                            <label htmlFor="inputAddress2" className="pb-2">Address 2</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <span className="fas fa-map-marker-alt"></span>
                                                </div>
                                                <input type="text" name="address2" id="inputAddress2" className="form-control" placeholder="Street Address 2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group mb-3">
                                            <label htmlFor="inputCity" className="pb-2">City</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <span className="fas fa-building"></span>
                                                </div>
                                                <input type="text" name="city" id="inputCity" className="form-control" placeholder="City" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="inputState" className="pb-2">State</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <span className="fas fa-certificate"></span>
                                                </div>
                                                <input type="text" name="state" id="inputState" className="form-control" placeholder="State" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="inputPostcode" className="pb-2">Postcode</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <span className="fas fa-certificate"></span>
                                                </div>
                                                <input type="text" name="postcode" id="inputPostcode" className="form-control" placeholder="Postcode" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label htmlFor="inputCountry" id="inputCountryIcon" className="pb-2">Country</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <span className="fas fa-certificate"></span>
                                                </div>
                                                <select name="country" id="inputCountry" className="select-filter form-control">
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AX">Aland Islands</option>
                                                    <option value="AL">Albania</option>
                                                    <option value="DZ">Algeria</option>
                                                    <option value="AS">American Samoa</option>
                                                    <option value="AD">Andorra</option>
                                                    <option value="AO">Angola</option>
                                                    <option value="AI">Anguilla</option>
                                                    <option value="AQ">Antarctica</option>
                                                    <option value="AG">Antigua And Barbuda</option>
                                                    <option value="AR">Argentina</option>
                                                    <option value="AM">Armenia</option>
                                                    <option value="AW">Aruba</option>
                                                    <option value="AU">Australia</option>
                                                    <option value="AT">Austria</option>
                                                    <option value="AZ">Azerbaijan</option>
                                                    <option value="BS">Bahamas</option>
                                                    <option value="BH">Bahrain</option>
                                                    <option value="BD">Bangladesh</option>
                                                    <option value="BB">Barbados</option>
                                                    <option value="BY">Belarus</option>
                                                    <option value="BE">Belgium</option>
                                                    <option value="BZ">Belize</option>
                                                    <option value="BJ">Benin</option>
                                                    <option value="BM">Bermuda</option>
                                                    <option value="BT">Bhutan</option>
                                                    <option value="BO">Bolivia</option>
                                                    <option value="BA">Bosnia And Herzegovina</option>
                                                    <option value="BW">Botswana</option>
                                                    <option value="BV">Bouvet Island</option>
                                                    <option value="BR">Brazil</option>
                                                    <option value="IO">British Indian Ocean Territory</option>
                                                    <option value="BN">Brunei Darussalam</option>
                                                    <option value="BG">Bulgaria</option>
                                                    <option value="BF">Burkina Faso </option>
                                                    <option value="BI">Burundi</option>
                                                    <option value="KH">Cambodia</option>
                                                    <option value="CM">Cameroon</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="CV">Cape Verde</option>
                                                    <option value="KY">Cayman Islands</option>
                                                    <option value="CF">Central African Republic</option>
                                                    <option value="TD">Chad</option>
                                                    <option value="CL">Chile</option>
                                                    <option value="CN">China</option>
                                                    <option value="CX">Christmas Island</option>
                                                    <option value="CC">Cocos (Keeling) Islands </option>
                                                    <option value="CO">Colombia</option>
                                                    <option value="KM">Comoros</option>
                                                    <option value="CG">Congo</option>
                                                    <option value="CD">Congo, Democratic Republic</option>
                                                    <option value="CK">Cook Islands</option>
                                                    <option value="CR">Costa Rica</option>
                                                    <option value="CI">Cote D'Ivoire</option>
                                                    <option value="HR">Croatia</option>
                                                    <option value="CU">Cuba</option>
                                                    <option value="CW">Curacao</option>
                                                    <option value="CY">Cyprus</option>
                                                    <option value="CZ">Czech Republic</option>
                                                    <option value="DK">Denmark</option>
                                                    <option value="DJ">Djibouti</option>
                                                    <option value="DM">Dominica</option>
                                                    <option value="DO">Dominican Republic</option>
                                                    <option value="EC">Ecuador</option>
                                                    <option value="EG">Egypt</option>
                                                    <option value="SV">El Salvador</option>
                                                    <option value="GQ">Equatorial Guinea</option>
                                                    <option value="ER">Eritrea</option>
                                                    <option value="EE">Estonia</option>
                                                    <option value="ET">Ethiopia</option>
                                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                                    <option value="FO">Faroe Islands</option>
                                                    <option value="FJ">Fiji</option>
                                                    <option value="FI">Finland</option>
                                                    <option value="FR">France</option>
                                                    <option value="GF">French Guiana</option>
                                                    <option value="PF">French Polynesia</option>
                                                    <option value="TF">French Southern Territories</option>
                                                    <option value="GA">Gabon</option>
                                                    <option value="GM">Gambia</option>
                                                    <option value="GE">Georgia</option>
                                                    <option value="DE">Germany</option>
                                                    <option value="GH">Ghana</option>
                                                    <option value="GI">Gibraltar</option>
                                                    <option value="GR">Greece</option>
                                                    <option value="GL">Greenland</option>
                                                    <option value="GD">Grenada</option>
                                                    <option value="GP">Guadeloupe</option>
                                                    <option value="GU">Guam</option>
                                                    <option value="GT">Guatemala</option>
                                                    <option value="GG">Guernsey</option>
                                                    <option value="GN">Guinea</option>
                                                    <option value="GW">Guinea-Bissau</option>
                                                    <option value="GY">Guyana</option>
                                                    <option value="HT">Haiti</option>
                                                    <option value="HM">Heard Island &amp; Mcdonald Islands </option>
                                                    <option value="VA">Holy See (Vatican City State)</option>
                                                    <option value="HN">Honduras</option>
                                                    <option value="HK">Hong Kong</option>
                                                    <option value="HU">Hungary</option>
                                                    <option value="IS">Iceland</option>
                                                    <option value="IN">India</option>
                                                    <option value="ID">Indonesia</option>
                                                    <option value="IR">Iran, Islamic Republic Of</option>
                                                    <option value="IQ">Iraq</option>
                                                    <option value="IE">Ireland</option>
                                                    <option value="IM">Isle Of Man</option>
                                                    <option value="IL">Israel</option>
                                                    <option value="IT">Italy</option>
                                                    <option value="JM">Jamaica</option>
                                                    <option value="JP">Japan</option>
                                                    <option value="JE">Jersey</option>
                                                    <option value="JO">Jordan</option>
                                                    <option value="KZ">Kazakhstan</option>
                                                    <option value="KE">Kenya</option>
                                                    <option value="KI">Kiribati</option>
                                                    <option value="KR">Korea</option>
                                                    <option value="KW">Kuwait</option>
                                                    <option value="KG">Kyrgyzstan</option>
                                                    <option value="LA">Lao People's Democratic Republic</option>
                                                    <option value="LV">Latvia</option>
                                                    <option value="LB">Lebanon</option>
                                                    <option value="LS">Lesotho</option>
                                                    <option value="LR">Liberia</option>
                                                    <option value="LY">Libyan Arab Jamahiriya</option>
                                                    <option value="LI">Liechtenstein</option>
                                                    <option value="LT">Lithuania</option>
                                                    <option value="LU">Luxembourg</option>
                                                    <option value="MO">Macao</option>
                                                    <option value="MK">Macedonia</option>
                                                    <option value="MG">Madagascar</option>
                                                    <option value="MW">Malawi</option>
                                                    <option value="MY" selected="">Malaysia</option>
                                                    <option value="MV">Maldives</option>
                                                    <option value="ML">Mali</option>
                                                    <option value="MT">Malta</option>
                                                    <option value="MH">Marshall Islands</option>
                                                    <option value="MQ">Martinique</option>
                                                    <option value="MR">Mauritania</option>
                                                    <option value="MU">Mauritius</option>
                                                    <option value="YT">Mayotte</option>
                                                    <option value="MX">Mexico</option>
                                                    <option value="FM">Micronesia, Federated States Of</option>
                                                    <option value="MD">Moldova</option>
                                                    <option value="MC">Monaco</option>
                                                    <option value="MN">Mongolia</option>
                                                    <option value="ME">Montenegro</option>
                                                    <option value="MS">Montserrat</option>
                                                    <option value="MA">Morocco</option>
                                                    <option value="MZ">Mozambique</option>
                                                    <option value="MM">Myanmar</option>
                                                    <option value="NA">Namibia</option>
                                                    <option value="NR">Nauru</option>
                                                    <option value="NP">Nepal</option>
                                                    <option value="NL">Netherlands</option>
                                                    <option value="AN">Netherlands Antilles</option>
                                                    <option value="NC">New Caledonia</option>
                                                    <option value="NZ">New Zealand</option>
                                                    <option value="NI">Nicaragua</option>
                                                    <option value="NE">Niger</option>
                                                    <option value="NG">Nigeria</option>
                                                    <option value="NU">Niue</option>
                                                    <option value="NF">Norfolk Island</option>
                                                    <option value="MP">Northern Mariana Islands</option>
                                                    <option value="NO">Norway</option>
                                                    <option value="OM">Oman</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="PW"> Palau</option>
                                                    <option value="PS">Palestine, State of</option>
                                                    <option value="PA">Panama</option>
                                                    <option value="PG">Papua New Guinea</option>
                                                    <option value="PY">Paraguay</option>
                                                    <option value="PE">Peru</option>
                                                    <option value="PH">Philippines</option>
                                                    <option value="PN">Pitcairn</option>
                                                    <option value="PL">Poland</option>
                                                    <option value="PT">Portugal</option>
                                                    <option value="PR">Puerto Rico</option>
                                                    <option value="QA">Qatar</option>
                                                    <option value="RE">Reunion</option>
                                                    <option value="RO">Romania</option>
                                                    <option value="RU">Russian Federation</option>
                                                    <option value="RW">Rwanda</option>
                                                    <option value="BL">Saint Barthelemy</option>
                                                    <option value="SH">Saint Helena</option>
                                                    <option value="KN">Saint Kitts And Nevis</option>
                                                    <option value="LC">Saint Lucia</option>
                                                    <option value="MF">Saint Martin</option>
                                                    <option value="PM">Saint Pierre And Miquelon</option>
                                                    <option value="VC">Saint Vincent And Grenadines</option>
                                                    <option value="WS">Samoa</option>
                                                    <option value="SM">San Marino</option>
                                                    <option value="ST">Sao Tome And Principe</option>
                                                    <option value="SA">Saudi Arabia</option>
                                                    <option value="SN">Senegal</option>
                                                    <option value="RS">Serbia</option>
                                                    <option value="SC">Seychelles</option>
                                                    <option value="SL">Sierra Leone</option>
                                                    <option value="SG">Singapore</option>
                                                    <option value="SK">Slovakia</option>
                                                    <option value="SI">Slovenia</option>
                                                    <option value="SB">Solomon Islands</option>
                                                    <option value="SO">Somalia</option>
                                                    <option value="ZA">South Africa</option>
                                                    <option value="GS">South Georgia And Sandwich Isl.</option>
                                                    <option value="ES">Spain</option>
                                                    <option value="LK">Sri Lanka</option>
                                                    <option value="SD">Sudan</option>
                                                    <option value="SR">Suriname</option>
                                                    <option value="SJ">Svalbard And Jan Mayen</option>
                                                    <option value="SZ">Swaziland</option>
                                                    <option value="SE">Sweden</option>
                                                    <option value="CH">Switzerland</option>
                                                    <option value="SY">Syrian Arab Republic</option>
                                                    <option value="TW">Taiwan</option>
                                                    <option value="TJ">Tajikistan</option>
                                                    <option value="TZ">Tanzania</option>
                                                    <option value="TH">Thailand</option>
                                                    <option value="TL">Timor-Leste</option>
                                                    <option value="TG">Togo</option>
                                                    <option value="TK">Tokelau</option>
                                                    <option value="TO">Tonga</option>
                                                    <option value="TT">Trinidad And Tobago</option>
                                                    <option value="TN">Tunisia</option>
                                                    <option value="TR">Turkey</option>
                                                    <option value="TM">Turkmenistan</option>
                                                    <option value="TC">Turks And Caicos Islands</option>
                                                    <option value="TV">Tuvalu</option>
                                                    <option value="UG">Uganda</option>
                                                    <option value="UA">Ukraine</option>
                                                    <option value="AE">United Arab Emirates</option>
                                                    <option value="GB">United Kingdom</option>
                                                    <option value="US">United States</option>
                                                    <option value="UM">United States Outlying Islands</option>
                                                    <option value="UY">Uruguay</option>
                                                    <option value="UZ">Uzbekistan</option>
                                                    <option value="VU">Vanuatu</option>
                                                    <option value="VE">Venezuela</option>
                                                    <option value="VN">Viet Nam</option>
                                                    <option value="VG">Virgin Islands, British</option>
                                                    <option value="VI">Virgin Islands, U.S.</option>
                                                    <option value="WF">Wallis And Futuna</option>
                                                    <option value="EH">Western Sahara</option>
                                                    <option value="YE">Yemen</option>
                                                    <option value="ZM">Zambia</option>
                                                    <option value="ZW">Zimbabwe</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="mb-3 mt-3">Account Security</h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="inputNewPassword1" className="pb-2">Password</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <span className="fas fa-lock"></span>
                                                </div>
                                                <input type="password" name="password" id="inputNewPassword1" className="form-control" placeholder="Password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="inputNewPassword2" className="pb-2">Confirm Password</label>
                                            <div className="input-group input-group-merge">
                                                <div className="input-icon">
                                                    <span className="fas fa-lock"></span>
                                                </div>
                                                <input type="password" name="password2" id="inputNewPassword2" className="form-control" placeholder="Confirm Password" value="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" value="Submit" className="btn btn-block btn-primary mt-4 mb-3 w-100 disable-on-click spinner-on-click ">Register</button>
                        </form>

                        <div className="other-login-signup my-3">
                            <div className="or-login-signup text-center">
                                <strong>Or Sign Up With</strong>
                            </div>
                        </div>
                        <ul className="list-inline social-login-signup text-center">
                            <li className="list-inline-item my-1">
                                <a href="#" className="btn btn-facebook"><i className="fab fa-facebook-f pr-1"></i> Facebook</a>
                            </li>
                            <li className="list-inline-item my-1">
                                <a href="#" className="btn btn-google"><i className="fab fa-google pr-1"></i> Google</a>
                            </li>
                            <li className="list-inline-item my-1">
                                <a href="#" className="btn btn-twitter"><i className="fab fa-twitter pr-1"></i> Twitter</a>
                            </li>
                        </ul>
                        <p className="text-center mt-2">Already have an account? <a href="/login">Login</a></p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="copyright-wrap small-text text-center mt-5 text-white">
                        <p className="mb-0">&copy; Seranex lanka solutions seranex.lk Design Agency, All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="theme-setting show">
        <a href="javascript:void(0)" id="themeSettingShow" className="theme-setting-link"><i className="fas fa-gear fa-spin"></i></a>
        <div className="theme-setting-body">
            <h6>Theme Option</h6>
            <div className="customize-color mt-4">
                <span className="heading-font fs-md fw-semibold">Default Theme</span>
                <a href="javascript:void(0)" className="d-block border theme-color d-flex align-items-center active" id="theme-default">
                    <span className="default-primary"></span>
                    <span className="default-accent"></span>
                    <span className="default-tertiary"></span>
                </a>
            </div>

            <div className="customize-color mt-4">
                <span className="heading-font fs-md fw-semibold">Theme One</span>
                <a href="javascript:void(0)" className="d-block border theme-color d-flex align-items-center" id="theme-1">
                    <span className="theme-1-primary"></span>
                    <span className="theme-1-accent"></span>
                    <span className="theme-1-tertiary"></span>
                </a>
            </div>

            <div className="customize-color mt-4">
                <span className="heading-font fs-md fw-semibold">Theme Two</span>
                <a href="javascript:void(0)" className="d-block border theme-color d-flex align-items-center" id="theme-2">
                    <span className="theme-2-primary"></span>
                    <span className="theme-2-accent"></span>
                    <span className="theme-2-tertiary"></span>
                </a>
            </div>

            <div className="customize-color mt-4">
                <span className="heading-font fs-md fw-semibold">Theme Three</span>
                <a href="javascript:void(0)" className="d-block border theme-color d-flex align-items-center" id="theme-3">
                    <span className="theme-3-primary"></span>
                    <span className="theme-3-accent"></span>
                    <span className="theme-3-tertiary"></span>
                </a>
            </div>
        </div>
    </div>
    <div className="scroll-top scroll-to-target primary-bg text-white" data-target="html">
        <span className="fas fa-hand-point-up"></span>
    </div>
    

    
    
    
    
    
    
    
    
    
    


    </>
  );
}
