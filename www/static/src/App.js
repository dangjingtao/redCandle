// main.js


'use strict';


import React from 'react';
import ReactDOM from 'react-dom';




import {
    Router,
    Route,
    hashHistory,
    IndexRoute,
    IndexRedirect
} from 'react-router';


// import { API } from './res';

import {
    MainIndex
} from './pages';


// console.log(C)
const routes = [
    // <Route path="/login" component={Login} />,
    <Route path="/" component={App}>
        <IndexRedirect to="/MainIndex" />
        <Route path="/MainIndex" component={MainIndex} />
        {/* 
        
        <Route path="/MainIndex" component={MainIndex} />
        <Route path="/Message" component={Message} />
        <Route path="/Me" component={Me} />
        <Route path="/NoticeDetail" component={NoticeDetail} />
        <Route path="/Unapproved" component={Unapproved} />
        <Route path="/TodaySchedules" component={TodaySchedules} />
        
        <Route path="/AttendanceAdmin" component={AttendanceAdmin} />
        <Route path="/StuAttendance" component={StuAttendance} />
        
        <Route path="/CourseAttendance" component={CourseAttendance} />

        <Route path="/CourseAttendanceDetail" component={CourseAttendanceDetail} />

        <Route path="/CourseAdmin" component={CourseAdmin} />
        <Route path="/CurriculumSchedule" component={CurriculumSchedule} />

        <Route path="/MyTable" component={MyTable} />
        <Route path="/StuTableList" component={StuTableList} />
        <Route path="/TeacherTableList" component={TeacherTableList} />
        <Route path="/ClassroomTableList" component={ClassroomTableList} />

        <Route path="/ScoreList" component={ScoreList} />

        <Route path="/UserAdmin" component={UserAdmin} />

        <Route path="/StudentsAdmin" component={StudentsAdmin} />

        <Route path="/StudentInfo" component={StudentInfo} />

        <Route path="/TeacherAdmin" component={TeacherAdmin} />

        <Route path="/TeacherInfo" component={TeacherInfo} />

        <Route path="/AddressList" component={AddressList} />

        <Route path="/AddressDetail" component={AddressDetail} />

        <Route path="/AssetManagement" component={AssetManagement} />

        <Route path="/AssetDetail" component={AssetDetail} />

        <Route path="/PurchasingRequisition" component={PurchasingRequisition}/>

        <Route path="/PurchaseDetail" component={PurchaseDetail}/>

        <Route path="/Repair" component={Repair}/>
        <Route path="/SponsoreRepair" component={SponsoreRepair}/>
        <Route path="/Evaluate" component={Evaluate}/>

        <Route path="/Table" component={Table}/>

        <Route path="/Moral" component={Moral}/>

        <Route path="/MoralDetail" component={MoralDetail}/>
        <Route path="/Safe" component={Safe}/>

        <Route path="/Rules" component={Rules}/>
        <Route path="/CheckRecord" component={CheckRecord}/>

        <Route path="/RulesInfo" component={RulesInfo}/>
        <Route path="/RecordInfo" component={RecordInfo}/>

        <Route path="/DidApprove" component={DidApprove}/>
        <Route path="/DoingApprove" component={DoingApprove}/> */}
    </Route>
];



const App = () => (
    
    <div>
       
            <Router {...props} />
        
        
    </div>
);

let props = {
    routes: routes,
    history: hashHistory
};




ReactDOM.render(<App />, document.getElementById('content'));

// render((
//     <Router history={hashHistory}>
//         <Route path="/" component={App} />
//     </Router>
// ), document.getElementById('content'));





