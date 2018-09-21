import React from 'react'
import { Link } from 'gatsby'
import { Container } from '../components/elements'
import Layout from '../components/layout'
import styled from 'styled-components'

const ChairSection = styled.div`
   margin-bottom: 40px;
`

const About = (props) => (
  <Layout location={props.location}>
    <Container>
      <h1>About IMSA</h1>
      <p>The Information Management Student Association (IMSA) is the official organization representing MIMS students at the I&nbsp;School. IMSA acts as the collective voice of the MIMS students and provides a point of contact for any needs of the students. IMSA’s primary goal is to ensure that all students are getting the most out of their time at the School. This involves all facets of student life ranging from careers and academics to social and extracurricular activities. Furthermore, IMSA advocates for MIMS students regarding school administration and facility matters, and coordinates all events that require a joint student-administration effort. Finally and most importantly, we strive to ensure that everyone feels part of the I&nbsp;School family!</p>
      <h2>2018 IMSA Officers</h2>
      
      <ChairSection>
         <h3>Co-Presidents</h3>
         <p>Coordinating the effort of improving our fellow students’ experience in imaginative and innovative ways, and ensuring that they have the best possible time at the I&nbsp;School. Also, leading the effort of organizing Infocamp, the benchmark annual conference organised by the school.</p>
         <div>
            <div className="entity entity-profile2 profile2-main clearfix">
               <div className="content">
                  <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                     <div className="field__items">
                        <div className="field__item even">
                        <img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/headshot.png?itok=rj4bieeB&amp;c=0b120c11dd2736b6bce806592dc367f8" width="200" height="200" alt="headshot.png" style={{ marginBottom: '0' }}/></div>
                     </div>
                  </div>
                  <div className="group-header field-group-div">
                     <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">Dimitris Hytiroglou</div>
                        </div>
                     </div>
                     <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">MIMS Student 2019</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <div className="entity entity-profile2 profile2-main clearfix">
               <div className="content">
                  <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                     <div className="field__items">
                        <div className="field__item even"><img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/professional_headshot_pic_0.jpg?itok=J6KN3JUH&amp;c=ba100fa889ff1e6d1aa9a009876c0c3d" width="200" height="200" alt="professional_headshot_pic_0.jpg" style={{ marginBottom: '0' }}/></div>
                     </div>
                  </div>
                  <div className="group-header field-group-div">
                     <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">Neha Mittal</div>
                        </div>
                     </div>
                     <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">MIMS Student 2019</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <p>Neha’s Personal Goal: Get IMSA and I&nbsp;School Community a larger web presence!</p>
            <p>Dimitrios’s Personal Goal: Foster the signature family feel of the I&nbsp;School and ensure that every student is part of it!</p>
         </div>
      </ChairSection>

      <ChairSection>
         <h3>Entrepreneurship Chair</h3>
         <p>Connecting the I&nbsp;School community with entrepreneurship-related opportunities on campus.</p>
         <div>
            <div className="entity entity-profile2 profile2-main clearfix">
               <div className="content">
                  <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                     <div className="field__items">
                        <div className="field__item even"><img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/aaeaaqaaaaaaaanuaaaajdk1ztizztnllwnimjqtndu3mi1ingiyltczndniowuymdjhng.jpg?itok=EqkYsfa-" width="200" height="200" alt="aaeaaqaaaaaaaanuaaaajdk1ztizztnllwnimjqtndu3mi1ingiyltczndniowuymdjhng.jpg" style={{ marginBottom: '0' }}/></div>
                     </div>
                  </div>
                  <div className="group-header field-group-div">
                     <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">Surya Sendyl</div>
                        </div>
                     </div>
                     <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">MIMS Student 2019</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </ChairSection>

      <ChairSection>
         <h3>Recruitment Chair</h3>
         <p>Coordinating with I&nbsp;School administration to run events for prospective students and building ties between current students and incoming students following the admissions process.</p>
         <div>
            <div className="entity entity-profile2 profile2-main clearfix">
               <div className="content">
                  <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                     <div className="field__items">
                        <div className="field__item even"><img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/profile.png?itok=CvHxwdPU" width="200" height="200" alt="profile.png" /></div>
                     </div>
                  </div>
                  <div className="group-header field-group-div">
                     <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">Daphne Jong</div>
                        </div>
                     </div>
                     <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">MIMS Student 2019</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </ChairSection>

      <ChairSection>
         <h3>Design Chair</h3>
         <p>Taking care of any design-related work for IMSA, organizing design events and opportunities for students, and connecting students to the broader design community on campus and beyond.</p>
         <div>
            <div className="entity entity-profile2 profile2-main clearfix">
               <div className="content">
                  <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                     <div className="field__items">
                        <div className="field__item even"><img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/11419940_889406521115654_808085924_n.jpg?itok=ieCnEcH7&amp;c=ed4911273fc5dc47f965dfd3bd380292" width="200" height="200" alt="Michelle Chen" style={{ marginBottom: '0' }}/></div>
                     </div>
                  </div>
                  <div className="group-header field-group-div">
                     <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">Michelle Chen</div>
                        </div>
                     </div>
                     <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">MIMS Student 2019</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </ChairSection>

      <ChairSection>
         <h3>Social Good Chair</h3>
         <p>Coordinating events and workshops for matters related to social good and introducing volunteer opportunities as well as alternative career options to I&nbsp;School students.</p>
         <div>
            <div className="entity entity-profile2 profile2-main clearfix">
               <div className="content">
                  <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                     <div className="field__items">
                        <div className="field__item even"><img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/14517403_1356689051038099_4790086682837336862_n.jpg?itok=RoB013YM" width="200" height="200" alt="Ching-Yi Lin Profile Picture" title="Ching-Yi Lin Profile Picture" style={{ marginBottom: '0' }}/></div>
                     </div>
                  </div>
                  <div className="group-header field-group-div">
                     <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">Ching-Yi Lin</div>
                        </div>
                     </div>
                     <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">MIMS Student 2019</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </ChairSection>

      <ChairSection>
         <h3>Career and Alumni Relations Co-Chairs</h3>
         <p>Coordinating events to promote continued alumni engagement while also representing current student interests and introducing career opportunities to the I&nbsp;School community.</p>
         <div>
            <div className="entity entity-profile2 profile2-main clearfix">
               <div className="content">
                  <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                     <div className="field__items">
                        <div className="field__item even"><img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/hs_1.jpg?itok=aVc8VZeH&amp;c=38e216f26137c68cbb75b7907e7b1991" width="200" height="200" alt="hs_1.jpg" style={{ marginBottom: '0' }}/></div>
                     </div>
                  </div>
                  <div className="group-header field-group-div">
                     <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">Aakriti Kaul</div>
                        </div>
                     </div>
                     <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">MIMS Student 2019</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="entity entity-profile2 profile2-main clearfix">
                  <div className="content">
                     <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even"><img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/paris-2015-feb55.jpg?itok=zSNgn3yO&amp;c=520b9406cd43c011a55a6324dbc106a2" width="200" height="200" alt="paris-2015-feb55.jpg" style={{ marginBottom: '0' }}/></div>
                        </div>
                     </div>
                     <div className="group-header field-group-div">
                        <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                           <div className="field__items">
                              <div className="field__item even">Lily Lin</div>
                           </div>
                        </div>
                        <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                           <div className="field__items">
                              <div className="field__item even">MIMS Student 2019</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </ChairSection>
      
      <ChairSection>
         <h3>Social Co-Chairs</h3>
         <p>Ensuring that students don’t forget that there is life outside academics. IMSA’s social chairs host a weekly event called I-Tea and also celebrate festivals from around the world. They are most known for being the lead organizers of the end-of-semester parties.</p>
         <div>
            <div className="entity entity-profile2 profile2-main clearfix">
               <div className="content">
                  <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                     <div className="field__items">
                        <div className="field__item even"><img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/img-20170205-wa0000.jpg?itok=KArcLOvq&amp;c=6b2dd2f8207c6a1dd1e7c06e06c64e87" width="200" height="200" alt="img-20170205-wa0000.jpg" style={{ marginBottom: '0' }}/></div>
                     </div>
                  </div>
                  <div className="group-header field-group-div">
                     <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">Birinder Singh Bhatia</div>
                        </div>
                     </div>
                     <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">MIMS Student 2019</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <div className="entity entity-profile2 profile2-main clearfix">
                  <div className="content">
                     <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even"><img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/_mg_9580.jpg?itok=LZ_NYb-g&amp;c=236bb37f4668673c843c8433db15df66" width="200" height="200" alt="Anuj Ramakrishnan" title="Anuj Ramakrishnan" style={{ marginBottom: '0' }}/></div>
                        </div>
                     </div>
                     <div className="group-header field-group-div">
                        <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                           <div className="field__items">
                              <div className="field__item even">Anuj Ramakrishnan</div>
                           </div>
                        </div>
                        <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                           <div className="field__items">
                              <div className="field__item even">MIMS Student 2019</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </ChairSection>

      <ChairSection>
         <h3>Tech Chair</h3>
         <p>Responsible for maintaining the Infocamp website and helping out with any technical requirements that students might need.</p>
         <div>
            <div className="entity entity-profile2 profile2-main clearfix">
               <div className="content">
                  <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                     <div className="field__items">
                        <div className="field__item even"><img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/_mg_9698.jpg?itok=HIp4LgPU&amp;c=c08198472ac335eb63deab5e4699b1c0" width="200" height="200" alt="_mg_9698.jpg" style={{ marginBottom: '0' }}/></div>
                     </div>
                  </div>
                  <div className="group-header field-group-div">
                     <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">Soravis Prakkamakul</div>
                        </div>
                     </div>
                     <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">MIMS Student 2019</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </ChairSection>

      <ChairSection>
         <h3>Academic Chair</h3>
         <p>Responsible for liaising between the faculty and students to ensure satisfaction in the academic sphere. Also leading I-Teach, study groups targeting specific focus areas.</p>
         <div>
            <div className="entity entity-profile2 profile2-main clearfix">
               <div className="content">
                  <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                     <div className="field__items">
                        <div className="field__item even"><img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/14485006_10210887814091643_6886953052988681428_n.jpg?itok=56WHVK1y&amp;c=ee12549d8a699247d7cf689745ed0a66" width="200" height="200" alt="14485006_10210887814091643_6886953052988681428_n.jpg" style={{ marginBottom: '0' }}/></div>
                     </div>
                  </div>
                  <div className="group-header field-group-div">
                     <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">Evelyn Mwangi</div>
                        </div>
                     </div>
                     <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">MIMS Student 2019</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </ChairSection>

      <ChairSection>
         <h3>Communications Chair</h3>
         <p>Responsible for Social Media publicity and spreading the word about events and activities.</p>
         <div>
            <div className="entity entity-profile2 profile2-main clearfix">
               <div className="content">
                  <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                     <div className="field__items">
                        <div className="field__item even"><img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/screen_shot_2017-06-02_at_3.57.13_pm.png?itok=XcPYcvTW" width="200" height="200" alt="screen_shot_2017-06-02_at_3.57.13_pm.png" style={{ marginBottom: '0' }}/></div>
                     </div>
                  </div>
                  <div className="group-header field-group-div">
                     <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">Michelle Peretz</div>
                        </div>
                     </div>
                     <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">MIMS Student 2019</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </ChairSection>

      <ChairSection>
         <h3>Finance Chair</h3>
         <p>Responsible for keeping track of accounts and annual budget across all events.</p>
         <div>
            <div className="entity entity-profile2 profile2-main clearfix">
               <div className="content">
                  <div className="field field--name-field-profile-picture field--type-image field--label-hidden">
                     <div className="field__items">
                        <div className="field__item even"><img src="https://www.ischool.berkeley.edu/sites/default/files/styles/profile_photo/public/profile_pictures/mnvzxwgiscit08cdu9toyw_thumb_21bb.jpg?itok=h-JamWH1" width="200" height="200" alt="mnvzxwgiscit08cdu9toyw_thumb_21bb.jpg" style={{ marginBottom: '0' }}/></div>
                     </div>
                  </div>
                  <div className="group-header field-group-div">
                     <div className="field field--name-field-profile-fullname field--type-text field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">Bo Brandt</div>
                        </div>
                     </div>
                     <div className="field field--name-field-profile-subtitle field--type-text-long field--label-hidden">
                        <div className="field__items">
                           <div className="field__item even">MIMS Student 2019</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </ChairSection>
    </Container>
  </Layout>
)

export default About
