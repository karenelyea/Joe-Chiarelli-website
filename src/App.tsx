import { useState } from "react";

const navy = "#1a2744", red = "#c0392b", gold = "#b8960c";
const sBg = "#fdf0ee", sTxt = "#8b2a1a";
const eBg = "#edf7f1", eTxt = "#0d5c42";
const iBg = "#e8f2fb", iTxt = "#154d8a";

const LOGO = "/images/logo.png";
const PHOTO = "/images/photo.png";
const SIGNATURE = "/images/signature.png";

const tag = (cat) => ({
  display:"inline-block",fontSize:10,fontWeight:700,letterSpacing:"0.08em",
  textTransform:"uppercase",padding:"2px 7px",borderRadius:2,marginBottom:6,
  background:cat==="s"?sBg:cat==="e"?eBg:iBg,
  color:cat==="s"?sTxt:cat==="e"?eTxt:iTxt,
});

const news = [
  {c:"e",p:"May 2026",d:"May 2026",t:"Economic Development",h:"Project Lilac Approved — $75M Industrial Facility",b:"The County Board approved a Redevelopment Agreement with Rock 39, LLC for a 1,202,800 sq ft industrial facility on 91.33 acres in the I-39/Baxter Road IJRL District — at minimum a $75 million investment and the fifth development in this zone."},
  {c:"i",p:"May 2026",d:"May 2026",t:"Infrastructure",h:"$6.6 Million in Federal Transportation Grants Secured",b:"Three federal grants secured: $4,037,092 (STBG) for Latham/Ralston Corridor widening; $1,271,066 (TAP) for the Roscoe Road Shared-Use Path; and $1,290,000 (CRP) for the Bell School/Olde Creek Roundabout."},
  {c:"e",p:"May 2026",d:"May 2026",t:"Economic Development",h:"PACE Clean Energy Financing Program Re-Established",b:"The County Board re-established the PACE program with Slipstream Group — enabling 100% long-term, fixed-rate financing for energy efficiency improvements in commercial properties, repaid through property tax assessments over up to 30 years."},
  {c:"e",p:"May 2026",d:"May 2026",t:"Economic Development",h:"Women's Baseball World Cup — $20M+ Economic Impact",b:"The County Board approved a $50,000 Host Fee grant for the 2026 Women's Baseball World Cup Group Stage, July 22–26 — the first time this international tournament will be held in Illinois, with an estimated $20 million regional economic impact."},
  {c:"e",p:"May 2026",d:"May 2026",t:"Economic Development",h:"$165K in Revolving Loan Fund Awards",b:"Awards to All Seasons Diversified Service, Barber Law LLC (woman-owned, 4 new positions), and Colin Kurtis, Ltd. (4 full-time positions including Senior Art Director, Copywriter, Account Supervisor, and Project Manager)."},
  {c:"s",p:"May 2026",d:"May 2026",t:"Public Safety",h:"Drug Court Marks 30 Years — 768 Lives Turned Around",b:"Chairman Chiarelli presented a proclamation honoring 30 years of Winnebago County Adult Drug Court — 55 graduation ceremonies and more than 768 individuals guided to successful program completion since 1996."},
  {c:"s",p:"May 2026",d:"May 2026",t:"Public Safety",h:"Carrie Lynn CAC Relocation Funded — $616K Approved",b:"The Board unanimously approved $616,000 in Public Safety Sales Tax funding for relocation to the Hart Building at 214 N. Church Street, co-locating with the Rockford Family Peace Center."},
  {c:"i",p:"May 2026",d:"May 2026",t:"Infrastructure",h:"SBA Disaster Loans Available for Tornado Victims",b:"Following the April 17 tornadoes, an SBA disaster declaration made low-interest loans available to businesses (4%), nonprofits (3.625%), and homeowners and renters (2.875%) with 12-month payment deferrals."},
  {c:"s",p:"May 2026",d:"May 2026",t:"Public Safety",h:"America 250 Art and Essay Competition — Students Honored",b:"Chairman Chiarelli presented awards to students throughout Winnebago County for the America 250 Art and Essay Competition. Winning submissions will be displayed at City Hall and official America 250 events all summer."},

  {c:"s",p:"April 2026",d:"Apr 2026",t:"Public Safety",h:"Disaster Declaration Coordinated After Roscoe Tornadoes",b:"After tornadoes struck Roscoe on April 17, Chairman Chiarelli coordinated the county disaster declaration and worked with IEMA Director Ted Berger to ensure rapid state and federal response."},

  {c:"s",p:"March 2026",d:"Mar 2026",t:"Public Safety",h:"330 First Responder Radios Replaced — $848K in Savings",b:"The County Board unanimously approved a $2.6 million upgrade replacing 330 end-of-life Motorola Starcom radios for the Sheriff's Office, Corrections, Animal Services, and Probation/Detention."},
  {c:"s",p:"March 2026",d:"Mar 2026",t:"Public Safety",h:"CASA Funding Expanded",b:"The Board authorized a new part-time CASA supervisor position through the Public Safety Sales Tax — expanding capacity to recruit and support court-appointed volunteer advocates for children."},
  {c:"s",p:"March 2026",d:"Mar 2026",t:"Public Safety",h:"Regional Police Training Center Modernization — Federal Funding Sought",b:"Chairman Chiarelli continued advocacy for federal Community Project Funding to build a state-of-the-art regional law enforcement training hub."},
  {c:"s",p:"March 2026",d:"Mar 2026",t:"Public Safety",h:"Regional Response Vehicles and Drone Enhancement Sought",b:"Sought federal funding for a bomb response vehicle, negotiators vehicle, tactical/SWAT vehicle, and three unmanned aerial drones for MABAS regional emergency response."},
  {c:"s",p:"March 2026",d:"Mar 2026",t:"Public Safety",h:"On-Site Veterinary Care Secured at Animal Services",b:"Two-year, $100,000 agreement with Shelter Vet-On-The-Go, PLLC for on-site veterinary care three times per week."},

  {c:"i",p:"February 2026",d:"Feb 2026",t:"Infrastructure",h:"I-39 Corridor Sewer Extension Approved",b:"Intergovernmental agreement to extend sewer ~2,500 feet north along Harrisville Road. The county's $380,000 share is part of a $1.5 million project opening the area to immediate industrial development."},
  {c:"i",p:"February 2026",d:"Feb 2026",t:"Infrastructure",h:"Federal Appropriations — $600K Water Main, $700K PFAS",b:"Senator Durbin secured $600,000 for the Baxter Road water main extension; Senator Duckworth delivered $700,000 for PFAS mitigation and water safety."},
  {c:"i",p:"February 2026",d:"Feb 2026",t:"Infrastructure",h:"Meridian Road Bridge Rehabilitation Pursued",b:"Advocacy advanced for rehabilitation of the Meridian Road Bridge over the Pecatonica River, built in 1973 with a sufficiency rating of 38.5 — qualifying it for the IDOT STP Bridge Program."},

  {c:"e",p:"January 2026",d:"Jan 2026",t:"Economic Development",h:"Rail Authority Site Acquisition Fund — $100K Investment",b:"The County Board approved $100,000 from the host fee to create a dedicated Site Acquisition Fund for the WCRA, complementing $250,000 already committed by the private sector."},

  {c:"i",p:"December 2025",d:"Dec 2025",t:"Infrastructure",h:"Rural Transit Ridership Surges — 363 Rides in First Quarter",b:"Rural transit launched July 2025 grew from 26 rides in month one to over 100 per month by October — a nearly 300% increase."},
  {c:"e",p:"December 2025",d:"Dec 2025",t:"Economic Development",h:"Rail Authority Repositioned as Regional Collaboration",b:"The WCRA was formally rebooted as a regional partnership among Winnebago County, the City of Rockford, Loves Park, Machesney Park, and the R1 Planning Council."},
  {c:"e",p:"December 2025",d:"Dec 2025",t:"Economic Development",h:"Apprenticeship Programs Integrated into County Procurement Policy",b:"Apprenticeship programs formally integrated into county procurement policy — building a skilled trades pipeline aligned with the businesses Winnebago County is actively working to attract."},
  {c:"e",p:"December 2025",d:"Dec 2025",t:"Economic Development",h:"Legislative Advocacy for Business Climate — BIPA Reform Pursued",b:"County lobbyists actively advocated for BIPA reform during the fall 2025 legislative session — removing a barrier putting Illinois at a competitive disadvantage for industrial investment."},

  {c:"e",p:"May 2025",d:"May 2025",t:"Economic Development",h:"Chairman's Administrative Authorities Restored",b:"On May 22, 2025, the County Board voted to restore full executive administrative authorities to the Chairman, including appointing and supervising department heads."},

  {c:"s",p:"June 2025",d:"Jun 2025",t:"Public Safety",h:"Family Court Center Hits Construction Milestone",b:"Construction reached a significant milestone with a wall breaking ceremony, averaging 32 workers on site daily and remaining on schedule."},
  {c:"e",p:"June 2025",d:"Jun 2025",t:"Economic Development",h:"Rail Industrial Park Attracts Multiple Active Developers",b:"Multiple developers were actively evaluating comprehensive development plans for sites within the Rail Industrial Park south of Chicago-Rockford International Airport — a major step toward realizing the 1,400-acre, rail-served industrial vision."},
  {c:"s",p:"June 2025",d:"Jun 2025",t:"Public Safety",h:"Sheriff's Office Lowers Corrections Officer Hiring Age to 18",b:"The Sheriff's Office updated its hiring policy to accept applications from candidates ages 18–20 — addressing staffing needs and creating new career pathways for younger county residents."},

  {c:"s",p:"March 2025",d:"Mar 2025",t:"Public Safety",h:"Public Safety Building Renovation Underway",b:"The $32 million Public Safety Building renovation moved into active construction. Asbestos abatement was completed and interior demolition began."},
  {c:"s",p:"March 2025",d:"Mar 2025",t:"Public Safety",h:"$8 Million Security Camera System Installation Begins",b:"Installation began on a system supporting 1,261 cameras and 1,725 intercoms across all major county facilities. Contract awarded to Montel Technologies and Hartmann Electric."},
  {c:"i",p:"March 2025",d:"Mar 2025",t:"Infrastructure",h:"Reagan Mass Transit Contract Approved",b:"The County Board approved a contract for daily, demand-response rural transportation — 6 AM to 6 PM, Monday through Friday, funded through IDOT's FTA Section 5311 program."},

  {c:"s",p:"September 2024",d:"Sept 2024",t:"Public Safety",h:"$32 Million Public Safety Building Renovation Awarded",b:"The County Board awarded a $32 million design-build contract to Ringland Johnson Construction — funded through nearly $24 million in federal ARPA funds — creating a new Family Court Center and Domestic Violence Assistance Center."},
  {c:"e",p:"September 2024",d:"Sept 2024",t:"Economic Development",h:"Air Liquide Opens World's Largest Biomethane Facility",b:"Ribbon cutting on the world's largest biomethane plant adjacent to the Winnebago Landfill — 300 construction jobs, 60 permanent positions, and enough clean energy to power 9,000 homes."},
  {c:"e",p:"September 2024",d:"Sept 2024",t:"Economic Development",h:"Winnebago County Rail Authority Revitalized",b:"After a decade of dormancy, Chairman Chiarelli moved to revitalize the WCRA as the county's economic development authority for the proposed 1,400-acre industrial park south of Chicago-Rockford International Airport."},
  {c:"i",p:"September 2024",d:"Sept 2024",t:"Infrastructure",h:"Baxter Road Water Main Extension Advances",b:"Progress extending water service from a county-owned well across I-39 along Baxter Road — a partnership with the Village of New Milford, the County Highway Department, and a federal appropriation from Senator Durbin."},
];

const about = [
  {l:"Roots",t:["Joseph V. Chiarelli is a lifelong resident of Winnebago County whose roots run deep in the Rockford community. The son of a small business owner, Joe grew up working alongside his father at Vince the Tailor — an experience that shaped his foundational belief in hard work, honesty, and genuine service to others.","That philosophy guided Joe through more than two decades as a small business owner himself, and ultimately drew him into public service."]},
  {l:"Public Service",t:["Joe began his civic career on the Rockford Zoning Board of Appeals and later the Winnebago County Zoning Board of Appeals — years of hands-on problem-solving that taught him the real-world impact of thoughtful decision-making on the quality of life for everyday residents.","He was first elected Rockford Alderman in 2013, serving two terms at the forefront of nearly every major issue facing the city. In 2020, he was elected Chairman of the Winnebago County Board — the governing body of the seventh-largest county in Illinois."]},
  {l:"Leadership",t:["Under Chairman Chiarelli's leadership, Winnebago County has pursued strategic initiatives to attract new businesses, strengthen regional collaboration, and invest in critical infrastructure. His tenure has been marked by successful advocacy for federal and state funding to advance transportation, public safety, and community services."]},
  {l:"Regional Role",t:["Chairman Chiarelli serves on the board of the National Association of Regional Councils, representing a four-state region spanning Illinois, Indiana, Wisconsin, and Minnesota. He also chairs the Rockford Metropolitan Planning Organization and serves as Vice Chair of Region 1 Planning Council."]},
  {l:"Character",t:["Chairman Chiarelli has always been known among colleagues for his ability to work through complex problems and find practical solutions — never losing sight of the people those solutions are meant to serve. He is a steadfast believer in the power of leadership, service, and mentorship."]},
];

function Footer() {
  return (
    <div style={{borderTop:`3px solid ${navy}`,marginTop:40,background:"#fff"}}>
      <div style={{maxWidth:860,margin:"0 auto",padding:"28px 20px",display:"grid",gridTemplateColumns:"1fr 1.4fr 1.4fr",gap:24,alignItems:"start"}}>
        <div>
          <img src={LOGO} alt="Joe Chiarelli for Winnebago County Chairman" style={{maxWidth:"100%",width:160,display:"block"}}/>
        </div>
        <div style={{fontSize:12,lineHeight:1.8,color:"#3a3530"}}>
          <div style={{fontWeight:700,color:red,marginBottom:6,fontSize:11,letterSpacing:"0.1em",textTransform:"uppercase"}}>Contact Information</div>
          <div>Phone: 815-721-2014</div>
          <div>Email: <a href="mailto:campaign@joechiarelli.com" style={{color:navy}}>campaign@joechiarelli.com</a></div>
          <div>Address: 2601 Reid Farm Rd. Ste #B, Rockford, IL 61114</div>
          <div><a href="https://www.facebook.com/ChiarelliForWinnebagoCountyBoardChairman" style={{color:navy}} target="_blank" rel="noreferrer">Facebook</a></div>
        </div>
        <div style={{fontSize:11,lineHeight:1.7,color:"#6b6560"}}>
          <div style={{marginBottom:10}}>Paid for by Citizens to Elect Joseph V. Chiarelli. A copy of our report filed with the State Board of Elections is (or will be) available on the Board's official website (<a href="https://www.elections.il.gov" style={{color:navy}} target="_blank" rel="noreferrer">www.elections.il.gov</a>) or for purchase from the State Board of Elections, Springfield, Illinois.</div>
          <div>Copyright 2026 Citizens to Elect Joseph V. Chiarelli | All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("home");
  const [filter, setFilter] = useState("all");
  const periods = [...new Set(news.map(n => n.p))];
  const filtered = filter === "all" ? news : news.filter(n => n.c === filter);

  const Nav = ({id,label,first,last}) => (
    <button onClick={()=>setTab(id)} style={{padding:"7px 18px",cursor:"pointer",fontFamily:"Arial,sans-serif",fontSize:12,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",border:"1px solid",borderRight:last?"1px solid":"none",borderColor:tab===id?navy:"#e0ddd6",background:tab===id?navy:"#fff",color:tab===id?"#fff":"#6b6560",borderRadius:first?"3px 0 0 3px":last?"0 3px 3px 0":"0"}}>{label}</button>
  );

  const FBtn = ({val,label}) => {
    const on = filter===val;
    const col = val==="all"?[navy,"#fff"]:val==="s"?[sTxt,sBg]:val==="e"?[eTxt,eBg]:[iTxt,iBg];
    return <button onClick={()=>setFilter(val)} style={{fontFamily:"Arial,sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",padding:"5px 12px",borderRadius:2,cursor:"pointer",border:`1px solid ${on?col[0]:"#e0ddd6"}`,background:on?(val==="all"?navy:col[1]):"#fff",color:on?(val==="all"?"#fff":col[0]):"#6b6560"}}>{label}</button>;
  };

  return (
    <div style={{fontFamily:"Arial,sans-serif",background:"#f8f7f4",margin:0}}>
      <div style={{maxWidth:860,margin:"0 auto",padding:"24px 20px 0"}}>
        <div style={{textAlign:"center",marginBottom:16}}>
          <img src={LOGO} alt="Joe Chiarelli for Winnebago County Chairman" style={{maxWidth:"100%",width:380,display:"inline-block"}}/>
        </div>
        <div style={{borderBottom:`2px solid ${navy}`,marginBottom:28,paddingBottom:12}}>
          <div style={{fontSize:12,fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:navy,marginBottom:10}}>Joe Chiarelli · Winnebago County Board Chairman</div>
          <div style={{display:"flex",flexWrap:"wrap"}}>
            <Nav id="home" label="Home" first={true} last={false}/>
            <Nav id="about" label="About" first={false} last={false}/>
            <Nav id="issues" label="Issues" first={false} last={false}/>
            <Nav id="news" label="News" first={false} last={false}/>
            <Nav id="donate" label="Donate" first={false} last={false}/>
            <Nav id="volunteer" label="Volunteer" first={false} last={false}/>
            <Nav id="contact" label="Contact" first={false} last={true}/>
          </div>
        </div>

        {tab==="home" && (
          <div>
            <div style={{textAlign:"center",marginBottom:8}}>
              <div style={{display:"inline-block",fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:red,marginBottom:4}}>Winnebago County Board Chairman</div>
            </div>
            <div style={{textAlign:"center",marginBottom:32}}>
              <div style={{width:380,height:380,borderRadius:"50%",border:`4px solid ${navy}`,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#fff"}}>
                <img src={PHOTO} alt="Joseph V. Chiarelli" style={{width:"88%",height:"88%",objectFit:"cover",objectPosition:"center 20%",borderRadius:"50%"}}/>
              </div>
            </div>
            <div style={{maxWidth:620,margin:"0 auto",textAlign:"center"}}>
              <div style={{borderLeft:`3px solid ${gold}`,borderRight:`3px solid ${gold}`,padding:"24px 32px",background:"#fff"}}>
                <p style={{fontFamily:"Georgia,serif",fontSize:19,fontStyle:"italic",lineHeight:1.7,color:"#2a2520",margin:"0 0 18px"}}>
                  "We've laid the groundwork — new jobs, safer neighborhoods, and stronger infrastructure for Winnebago County. But the work isn't finished. I'm asking for the chance to keep building a brighter future, rooted in the same values of hard work, honesty, and service to our community that have guided me my entire life."
                </p>
                <img src={SIGNATURE} alt="Joseph Chiarelli signature" style={{height:48,margin:"0 auto",display:"block"}}/>
              </div>
            </div>
          </div>
        )}

        {tab==="about" && (
          <div>
            <div style={{marginBottom:24,paddingBottom:20,borderBottom:"1px solid #e0ddd6"}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:red,marginBottom:4}}>Chairman, Winnebago County Board</div>
              <h1 style={{fontFamily:"Georgia,serif",fontSize:26,fontWeight:700,color:navy,margin:"0 0 10px"}}>Joseph V. Chiarelli</h1>
              <p style={{fontSize:15,lineHeight:1.7,color:"#6b6560",maxWidth:560,margin:0}}>Lifelong Winnebago County resident. Small business owner. Public servant. Husband, father, and grandfather.</p>
            </div>
            <div style={{maxWidth:640}}>
              {about.map((s,i)=>(
                <div key={i} style={{display:"grid",gridTemplateColumns:"110px 1fr",gap:"0 24px",padding:"18px 0",borderBottom:"1px solid #e0ddd6"}}>
                  <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:navy,paddingTop:2}}>{s.l}</div>
                  <div>{s.t.map((t,j)=><p key={j} style={{fontSize:14,lineHeight:1.8,color:"#3a3530",margin:"0 0 10px"}}>{t}</p>)}</div>
                </div>
              ))}
              <div style={{marginTop:28,background:"#fff",border:"1px solid #e0ddd6",borderTop:`3px solid ${gold}`,borderRadius:3,padding:"20px 24px"}}>
                <p style={{fontSize:14,lineHeight:1.85,color:"#3a3530",margin:0}}>Joe lives in Rockford with his wife <strong style={{color:navy}}>Connie</strong>, to whom he has been married for 38 years. Together they have two adult children, <strong style={{color:navy}}>Claudia</strong> and <strong style={{color:navy}}>Vince</strong>, and a daughter-in-law, <strong style={{color:navy}}>Shayna</strong>. Their grandson <strong style={{color:navy}}>Joseph</strong> is the living embodiment of everything Joe works toward — and the reason his commitment to Winnebago County has never wavered.</p>
              </div>
            </div>
          </div>
        )}

        {tab==="issues" && (
          <div>
            <div style={{marginBottom:24,paddingBottom:20,borderBottom:"1px solid #e0ddd6"}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:red,marginBottom:4}}>Where Joe Chiarelli Stands</div>
              <h1 style={{fontFamily:"Georgia,serif",fontSize:26,fontWeight:700,color:navy,margin:"0 0 10px"}}>Three Priorities. One Clear Direction.</h1>
              <p style={{fontSize:15,lineHeight:1.7,color:"#6b6560",maxWidth:560,margin:0}}>Winnebago County faces real challenges — and real opportunities. Chairman Chiarelli's agenda is built around three commitments that every family and business in our region depends on.</p>
            </div>
            {[
              {c:"s",pill:"Public Safety",h:"Safe communities don't happen by accident — they require investment, leadership, and the willingness to act before a crisis forces your hand.",body:["Joe Chiarelli believes that public safety is the foundational responsibility of local government. Everything else we value — a growing economy, strong families, a vibrant civic life — rests on the confidence that our neighborhoods are safe, our first responders are equipped, and our most vulnerable residents are protected.","That means funding the right equipment before it fails. It means investing in proven alternatives to incarceration like Drug Court, which over 30 years has guided more than 768 people to successful program completion. It means standing behind organizations like CASA. Public safety spending is not overhead — it is the investment that makes every other investment possible."],q:'"Keeping first responders connected with dependable equipment isn\'t just a budget line item. It\'s a commitment to the safety of everyone who calls Winnebago County home." — Chairman Chiarelli, March 2026',stats:[{n:"768+",l:"Drug Court graduates"},{n:"$2.6M",l:"Radio upgrade"},{n:"$8M",l:"Security cameras"},{n:"$616K",l:"Carrie Lynn CAC"}]},
              {c:"e",pill:"Economic Development",h:"Winnebago County's future isn't something that happens to us — it's something we build, deliberately and strategically, one decision at a time.",body:["Joe Chiarelli came into office understanding that economic development is an ecosystem — built over years through zoning decisions, infrastructure investments, workforce pipelines, and the patient work of making Winnebago County ready for opportunity.","The I-39/Baxter Road corridor has become one of the most competitive industrial zones in northern Illinois, with five major developments now committed. The Rail Authority has been revitalized, PACE has been re-established, and Revolving Loan Fund dollars are supporting women-owned firms and family businesses."],q:'"Two hundred and fifty years of progress did not happen all at once — it happened one community at a time, one decision at a time." — Chairman Chiarelli, May 2026',stats:[{n:"$75M+",l:"Project Lilac investment"},{n:"1.2M sq ft",l:"Project Lilac size"},{n:"5",l:"I-39 developments"},{n:"$165K",l:"RLF awards"}]},
              {c:"i",pill:"Infrastructure",h:"You cannot attract jobs, serve residents, or build a resilient community on roads, bridges, and water systems that are failing.",body:["Joe Chiarelli understands infrastructure the way a builder understands a foundation: get it wrong and everything you put on top of it is at risk. Get it right and you create the conditions for everything else to succeed.","His work as Chair of the Rockford MPO has helped secure nearly $6.6 million in federal transportation grants. He's behind the Harrisville Road sewer extension, the Baxter Road water main, and long-term waste-to-energy planning that will extend the life of our landfill."],q:'"We\'re laying the groundwork for the kind of economic future our region deserves — doing the hard, unglamorous work that makes growth possible." — Chairman Chiarelli, March 2026',stats:[{n:"$6.6M",l:"Federal grants (2026)"},{n:"$32M",l:"Court renovation"},{n:"363",l:"Rural transit rides"},{n:"9,000",l:"Homes via Air Liquide"}]},
            ].map((issue,idx,arr)=>(
              <div key={idx} style={{marginBottom:idx===arr.length-1?0:32,paddingBottom:idx===arr.length-1?0:32,borderBottom:idx===arr.length-1?"none":"1px solid #e0ddd6"}}>
                <span style={{display:"inline-block",fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",padding:"3px 9px",borderRadius:2,marginBottom:8,background:issue.c==="s"?sBg:issue.c==="e"?eBg:iBg,color:issue.c==="s"?sTxt:issue.c==="e"?eTxt:iTxt}}>{issue.pill}</span>
                <h2 style={{fontFamily:"Georgia,serif",fontSize:18,fontWeight:700,color:navy,lineHeight:1.35,margin:"0 0 12px"}}>{issue.h}</h2>
                {issue.body.map((b,j)=><p key={j} style={{fontSize:14,lineHeight:1.8,color:"#3a3530",margin:"0 0 10px"}}>{b}</p>)}
                <div style={{borderLeft:`3px solid ${gold}`,padding:"10px 14px",margin:"14px 0",background:"#fdfbf5",fontStyle:"italic",fontSize:13,color:"#4a3f30",lineHeight:1.65}}>{issue.q}</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(110px,1fr))",gap:8,marginTop:14}}>
                  {issue.stats.map((s,j)=>(
                    <div key={j} style={{background:"#fff",border:"1px solid #e0ddd6",borderRadius:4,padding:"10px 8px",textAlign:"center"}}>
                      <div style={{fontSize:18,fontWeight:700,color:navy}}>{s.n}</div>
                      <div style={{fontSize:10,color:"#6b6560",marginTop:3,lineHeight:1.4}}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab==="news" && (
          <div>
            <div style={{marginBottom:24,paddingBottom:20,borderBottom:"1px solid #e0ddd6"}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:red,marginBottom:4}}>Record of Accomplishment</div>
              <h1 style={{fontFamily:"Georgia,serif",fontSize:26,fontWeight:700,color:navy,margin:"0 0 10px"}}>Results Under Chairman Chiarelli's Leadership</h1>
              <p style={{fontSize:15,lineHeight:1.7,color:"#6b6560",maxWidth:560,margin:0}}>A chronological record of decisions, investments, and results.</p>
            </div>
            <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:20}}>
              {[["all","All"],["s","Public Safety"],["e","Economic Dev."],["i","Infrastructure"]].map(([v,l])=><FBtn key={v} val={v} label={l}/>)}
            </div>
            {periods.map(period=>{
              const items = filtered.filter(n=>n.p===period);
              if(!items.length) return null;
              return (
                <div key={period}>
                  <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:navy,background:"#eceae4",padding:"5px 10px",margin:"18px 0 0",borderLeft:`3px solid ${navy}`}}>{period}</div>
                  {items.map((item,i)=>(
                    <div key={i} style={{display:"grid",gridTemplateColumns:"76px 1fr",gap:"0 14px",padding:"14px 0",borderBottom:"1px solid #e0ddd6"}}>
                      <div style={{fontSize:10,fontWeight:700,color:"#6b6560",paddingTop:2}}>{item.d}</div>
                      <div>
                        <span style={tag(item.c)}>{item.t}</span>
                        <h3 style={{fontFamily:"Georgia,serif",fontSize:14,fontWeight:700,color:navy,lineHeight:1.35,margin:"0 0 4px"}}>{item.h}</h3>
                        <p style={{fontSize:13,lineHeight:1.7,color:"#4a4540",margin:0}}>{item.b}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}

        {tab==="donate" && (
          <div>
            <div style={{marginBottom:24,paddingBottom:20,borderBottom:"1px solid #e0ddd6"}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:red,marginBottom:4}}>Support the Campaign</div>
              <h1 style={{fontFamily:"Georgia,serif",fontSize:26,fontWeight:700,color:navy,margin:"0 0 10px"}}>Donate</h1>
              <p style={{fontSize:15,lineHeight:1.7,color:"#6b6560",maxWidth:560,margin:0}}>Your contribution helps keep Winnebago County moving forward — toward safer neighborhoods, a stronger economy, and better infrastructure for every resident.</p>
            </div>
            <div style={{maxWidth:520,margin:"0 auto",textAlign:"center"}}>
              <div style={{background:"#fff",border:"1px solid #e0ddd6",borderTop:`3px solid ${gold}`,borderRadius:3,padding:"24px 28px",textAlign:"left"}}>
                <div style={{fontSize:11,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:navy,marginBottom:10}}>Donate by Mail</div>
                <p style={{fontSize:14,lineHeight:1.85,color:"#3a3530",margin:0}}>
                  Please send checks to:<br/>
                  Citizens to Elect Joseph V. Chiarelli<br/>
                  2601 Reid Farm Rd. Ste #B<br/>
                  Rockford, Illinois 61114
                </p>
              </div>
            </div>
          </div>
        )}

        {tab==="volunteer" && (
          <div>
            <div style={{marginBottom:24,paddingBottom:20,borderBottom:"1px solid #e0ddd6"}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:red,marginBottom:4}}>Get Involved</div>
              <h1 style={{fontFamily:"Georgia,serif",fontSize:26,fontWeight:700,color:navy,margin:"0 0 10px"}}>Volunteer</h1>
              <p style={{fontSize:15,lineHeight:1.7,color:"#6b6560",maxWidth:560,margin:0}}>Join the team working to keep Winnebago County moving in the right direction. Fill out the form below and we'll be in touch.</p>
            </div>
            <form name="volunteer" method="POST" data-netlify="true" style={{maxWidth:520,display:"flex",flexDirection:"column",gap:14}}>
              <input type="hidden" name="form-name" value="volunteer"/>
              <div>
                <label style={{display:"block",fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:navy,marginBottom:5}}>Full Name</label>
                <input type="text" name="name" required style={{width:"100%",padding:"10px 12px",border:"1px solid #e0ddd6",borderRadius:3,fontSize:14,fontFamily:"Arial,sans-serif",boxSizing:"border-box"}}/>
              </div>
              <div>
                <label style={{display:"block",fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:navy,marginBottom:5}}>Email</label>
                <input type="email" name="email" required style={{width:"100%",padding:"10px 12px",border:"1px solid #e0ddd6",borderRadius:3,fontSize:14,fontFamily:"Arial,sans-serif",boxSizing:"border-box"}}/>
              </div>
              <div>
                <label style={{display:"block",fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:navy,marginBottom:5}}>Phone</label>
                <input type="tel" name="phone" style={{width:"100%",padding:"10px 12px",border:"1px solid #e0ddd6",borderRadius:3,fontSize:14,fontFamily:"Arial,sans-serif",boxSizing:"border-box"}}/>
              </div>
              <div>
                <label style={{display:"block",fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:navy,marginBottom:5}}>Address</label>
                <input type="text" name="address" style={{width:"100%",padding:"10px 12px",border:"1px solid #e0ddd6",borderRadius:3,fontSize:14,fontFamily:"Arial,sans-serif",boxSizing:"border-box"}}/>
              </div>
              <div>
                <label style={{display:"block",fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:navy,marginBottom:5}}>How Would You Like to Help?</label>
                <textarea name="message" rows={4} style={{width:"100%",padding:"10px 12px",border:"1px solid #e0ddd6",borderRadius:3,fontSize:14,fontFamily:"Arial,sans-serif",boxSizing:"border-box",resize:"vertical"}}/>
              </div>
              <label style={{display:"flex",alignItems:"center",gap:8,fontSize:14,color:"#3a3530"}}>
                <input type="checkbox" name="yard_sign" style={{width:18,height:18}}/>
                May we place a yard sign at your address?
              </label>
              <button type="submit" style={{background:navy,color:"#fff",fontFamily:"Arial,sans-serif",fontWeight:700,fontSize:14,letterSpacing:"0.08em",textTransform:"uppercase",padding:"12px 32px",border:"none",borderRadius:3,cursor:"pointer",marginTop:8,alignSelf:"flex-start"}}>
                Submit
              </button>
            </form>
          </div>
        )}

        {tab==="contact" && (
          <div>
            <div style={{marginBottom:24,paddingBottom:20,borderBottom:"1px solid #e0ddd6"}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:red,marginBottom:4}}>Get in Touch</div>
              <h1 style={{fontFamily:"Georgia,serif",fontSize:26,fontWeight:700,color:navy,margin:"0 0 10px"}}>Contact</h1>
            </div>
            <div style={{maxWidth:480,background:"#fff",border:"1px solid #e0ddd6",borderTop:`3px solid ${gold}`,borderRadius:3,padding:"24px 28px",fontSize:14,lineHeight:2,color:"#3a3530"}}>
              <div>Phone: 815-721-2014</div>
              <div>Email: <a href="mailto:campaign@joechiarelli.com" style={{color:navy}}>campaign@joechiarelli.com</a></div>
              <div>Address: 2601 Reid Farm Rd. Ste #B, Rockford, IL 61114</div>
              <div><a href="https://www.facebook.com/ChiarelliForWinnebagoCountyBoardChairman" style={{color:navy}} target="_blank" rel="noreferrer">Facebook</a></div>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}