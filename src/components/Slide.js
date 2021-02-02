import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img from './../image/dame.JPG';
// import './../css/slide2';


const slideImages = [
  './../image/img1.jpg',
  './../image/img2.jpg',
  './../image/img3.jpg'
];


const Slideshow = () => {
  return (
    <div>
      <h1> Loumi Test 🏠 </h1>
      <br/> <br/> 
      <Slide easing="ease">

        <div className="each-slide">


          <div className="services">
            <div className="service_container">

              {/* -------Title---------- */}
              <h3> Collocation 4 pers. </h3>



              {/* ------ Profils ---------- */}

              <div className="profils">
                <div className="profil_details">

                  {/* profil number 1 */}
                  <div className="profilone">
                    J-C. L'auberiviere
                      <div className="btn_pro">
                      &nbsp; CDI
                      </div>
                  </div>

                  {/* profil number 2 */}
                  <div className="profiltwo">
                    J-C. L'auberiviere
                      <div className="btn_pro4">
                      &nbsp; Profession liberal
                      </div>
                  </div>

                </div>


                <div className="profil_detail">
                  <img src={img} />
                  <img src={img} />
                </div>


              </div>


              {/* ---------Incomes--------- */}
              <div className="incomes">
                <div className="title">Revenue Mensuel Moyen</div>
                <div className="candidat">
                  <div> Candidat</div>
                  <div className="euro"> 5 206 &euro;</div>
                </div>
                <div className="garant">
                  <div> Garant</div>
                  <div className="euro"> 5 206 &euro;</div>
                </div>

              </div>


              {/* --------Footer -----------*/}

              <div className="footer"> 
                  <div className="btn">
                    Voir Plus
                  </div>
                  <div className="btn_footer">
                    Viste du 13 mars a 10h45
                  </div>
              </div>


            </div>
          </div>

          <div className="services">
            <div className="service_container">

              {/* -------Title---------- */}
              <h3> Collocation 4 pers. </h3>



              {/* ------ Profils ---------- */}

              <div className="profils">
                <div className="profil_details">

                  {/* profil number 1 */}
                  <div className="profilone">
                    J-C. L'auberiviere
                      <div className="btn_pro">
                      &nbsp; CDI
                      </div>
                  </div>

                  {/* profil number 2 */}
                  <div className="profiltwo">
                    J-C. L'auberiviere
                      <div className="btn_pro4">
                      &nbsp; Profession liberal
                      </div>
                  </div>

                </div>


                <div className="profil_detail">
                  <img src={img} />
                  <img src={img} />
                </div>


              </div>


              {/* ---------Incomes--------- */}
              <div className="incomes">
                <div className="title">Revenue Mensuel Moyen</div>
                <div className="candidat">
                  <div> Candidat</div>
                  <div className="euro"> 5 206 &euro;</div>
                </div>
                <div className="garant">
                  <div> Garant</div>
                  <div className="euro"> 5 206 &euro;</div>
                </div>

              </div>


              {/* --------Footer -----------*/}

              <div className="footer"> 
                  <div className="btn">
                    Voir Plus
                  </div>
                  <div className="btn_footer">
                    Viste du 13 mars a 10h45
                  </div>
              </div>


            </div>
          </div>

          <div className="services">
            <div className="service_container">

              {/* -------Title---------- */}
              <h3> Collocation 4 pers. </h3>



              {/* ------ Profils ---------- */}

              <div className="profils">
                <div className="profil_details">

                  {/* profil number 1 */}
                  <div className="profilone">
                    J-C. L'auberiviere
                      <div className="btn_pro">
                      &nbsp; CDI
                      </div>
                  </div>

                  {/* profil number 2 */}
                  <div className="profiltwo">
                    J-C. L'auberiviere
                      <div className="btn_pro4">
                      &nbsp; Profession liberal
                      </div>
                  </div>

                </div>


                <div className="profil_detail">
                  <img src={img} />
                  <img src={img} />
                </div>


              </div>


              {/* ---------Incomes--------- */}
              <div className="incomes">
                <div className="title">Revenue Mensuel Moyen</div>
                <div className="candidat">
                  <div> Candidat</div>
                  <div className="euro"> 5 206 &euro;</div>
                </div>
                <div className="garant">
                  <div> Garant</div>
                  <div className="euro"> 5 206 &euro;</div>
                </div>

              </div>


              {/* --------Footer -----------*/}

              <div className="footer"> 
                  <div className="btn">
                    Voir Plus
                  </div>
                  <div className="btn_footer">
                    Viste du 13 mars a 10h45
                  </div>
              </div>


            </div>
          </div>
 
        </div>


        <div className="each-slide">


          <div className="services">
            <div className="service_container">

              {/* -------Title---------- */}
              <h3> Collocation 4 pers. </h3>



              {/* ------ Profils ---------- */}

              <div className="profils">
                <div className="profil_details">

                  {/* profil number 1 */}
                  <div className="profilone">
                    J-C. L'auberiviere
                      <div className="btn_pro">
                      &nbsp; CDI
                      </div>
                  </div>

                  {/* profil number 2 */}
                  <div className="profiltwo">
                    J-C. L'auberiviere
                      <div className="btn_pro4">
                      &nbsp; Profession liberal
                      </div>
                  </div>

                </div>


                <div className="profil_detail">
                  <img src={img} />
                  <img src={img} />
                </div>


              </div>


              {/* ---------Incomes--------- */}
              <div className="incomes">
                <div className="title">Revenue Mensuel Moyen</div>
                <div className="candidat">
                  <div> Candidat</div>
                  <div className="euro"> 5 206 &euro;</div>
                </div>
                <div className="garant">
                  <div> Garant</div>
                  <div className="euro"> 5 206 &euro;</div>
                </div>

              </div>


              {/* --------Footer -----------*/}

              <div className="footer"> 
                  <div className="btn">
                    Voir Plus
                  </div>
                  <div className="btn_footer">
                    Viste du 13 mars a 10h45
                  </div>
              </div>


            </div>
          </div>

          <div className="services">
            <div className="service_container">

              {/* -------Title---------- */}
              <h3> Collocation 4 pers. </h3>



              {/* ------ Profils ---------- */}

              <div className="profils">
                <div className="profil_details">

                  {/* profil number 1 */}
                  <div className="profilone">
                    J-C. L'auberiviere
                      <div className="btn_pro">
                      &nbsp; CDI
                      </div>
                  </div>

                  {/* profil number 2 */}
                  <div className="profiltwo">
                    J-C. L'auberiviere
                      <div className="btn_pro4">
                      &nbsp; Profession liberal
                      </div>
                  </div>

                </div>


                <div className="profil_detail">
                  <img src={img} />
                  <img src={img} />
                </div>


              </div>


              {/* ---------Incomes--------- */}
              <div className="incomes">
                <div className="title">Revenue Mensuel Moyen</div>
                <div className="candidat">
                  <div> Candidat</div>
                  <div className="euro"> 5 206 &euro;</div>
                </div>
                <div className="garant">
                  <div> Garant</div>
                  <div className="euro"> 5 206 &euro;</div>
                </div>

              </div>


              {/* --------Footer -----------*/}

              <div className="footer"> 
                  <div className="btn">
                    Voir Plus
                  </div>
                  <div className="btn_footer">
                    Viste du 13 mars a 10h45
                  </div>
              </div>


            </div>
          </div>

          <div className="services">
            <div className="service_container">

              {/* -------Title---------- */}
              <h3> Collocation 4 pers. </h3>



              {/* ------ Profils ---------- */}

              <div className="profils">
                <div className="profil_details">

                  {/* profil number 1 */}
                  <div className="profilone">
                    J-C. L'auberiviere
                      <div className="btn_pro">
                      &nbsp; CDI
                      </div>
                  </div>

                  {/* profil number 2 */}
                  <div className="profiltwo">
                    J-C. L'auberiviere
                      <div className="btn_pro4">
                      &nbsp; Profession liberal
                      </div>
                  </div>

                </div>


                <div className="profil_detail">
                  <img src={img} />
                  <img src={img} />
                </div>


              </div>


              {/* ---------Incomes--------- */}
              <div className="incomes">
                <div className="title">Revenue Mensuel Moyen</div>
                <div className="candidat">
                  <div> Candidat</div>
                  <div className="euro"> 5 206 &euro;</div>
                </div>
                <div className="garant">
                  <div> Garant</div>
                  <div className="euro"> 5 206 &euro;</div>
                </div>

              </div>


              {/* --------Footer -----------*/}

              <div className="footer"> 
                  <div className="btn">
                    Voir Plus
                  </div>
                  <div className="btn_footer">
                    Viste du 13 mars a 10h45
                  </div>
              </div>


            </div>
          </div>
 
        </div>



      </Slide>
    </div>
  )
};


export default Slideshow;