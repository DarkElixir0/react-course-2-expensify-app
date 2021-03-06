import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin == true && <p>This is private info please dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>User authentication failed</p>}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="there are no details"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="there are no details"/>,document.getElementById('app'));




// hqporner.com
// pornxp.com
// bestzzporno.com
// zzpornostars.com
// ullu.vip
// Shubham Kumar2:45 AM
// aagmaal.live
// desi52.club