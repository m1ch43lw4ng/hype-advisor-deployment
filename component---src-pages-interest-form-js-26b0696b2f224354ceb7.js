(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"09Ki":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o}));a("pJf4");var n=a("q1tI"),r=a.n(n),i=a("Bl7J"),l=a("vrFN"),s=a("Y8tA");a("FCOQ");var o=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={name:"",email:"",mailing_list:!1,message:"",success_status:!1,failed_status:!1},t.handleInputChange=function(e){var a,n=e.target,r=n.value,i=n.name;t.setState(((a={})[i]=r,a))},t.handleSubmit=function(e){e.preventDefault();var a,n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify((a=t.state,{name:a.name,email:a.email,message:a.message}))};fetch("https://dlk12c02xk.execute-api.us-west-1.amazonaws.com/default/EmailCollector",n).then((function(e){if(!e.ok)throw new Error(e.body);t.setState({success_status:!0})})).catch((function(){t.setState({failed_status:!0})}))},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=function(){return r.a.createElement("div",{class:"Interest_Form-reply"},r.a.createElement("p",null,"  Something weird happened. We're really sorry -- please email us about it! "))},t=function(){return r.a.createElement("div",{class:"Interest_Form-reply"},r.a.createElement("p",null," Thanks! We'll be getting back to you shortly. "))},a=function(){return r.a.createElement("button",{id:"Interest_Form-send",type:"submit"},r.a.createElement("p",null,"Send"))};return r.a.createElement(i.a,{renderFooter:!1},r.a.createElement(l.a,{title:"Contact Us"}),r.a.createElement("div",{id:"Interest_Form_interest-div"},r.a.createElement("form",{id:"right-bar",onSubmit:this.handleSubmit},r.a.createElement("h1",{id:"interest-form"},"Contact Us"),r.a.createElement("p",{class:"required"},"* required"),r.a.createElement("section",{id:"Interest_Form-data"},r.a.createElement("h4",null,r.a.createElement("label",{for:"name"}," ",r.a.createElement("span",null,"*Name:")," ")),r.a.createElement("p",null,r.a.createElement("input",{type:"text",placeholder:"Your Name",name:"name",value:this.state.name,onChange:this.handleInputChange,required:!0})),r.a.createElement("h4",null,r.a.createElement("label",{for:"email"}," ",r.a.createElement("span",null,"*Email:")," ")),r.a.createElement("p",null,r.a.createElement("input",{type:"email",placeholder:"Your Email Address",name:"email",value:this.state.email,onChange:this.handleInputChange,required:!0})),r.a.createElement("h4",null,r.a.createElement("label",{for:"message"}," ",r.a.createElement("span",null,"Message:")," ")),r.a.createElement("p",null,r.a.createElement("textarea",{type:"textarea",id:"message",placeholder:"Your Message",name:"message"}))),this.state.failed_status&&r.a.createElement(e,null),this.state.success_status&&r.a.createElement(t,null),!(this.state.failed_status||this.state.success_status)&&r.a.createElement(a,null),r.a.createElement("p",{class:"disclaimer"},"By using The Hype Advisor, you are agreeing to this Terms of Use, which are subject to change at any given time. If any notice of change to the Terms is made to you, the change shall be made effective immediately. Any disagreement with the Terms should result in discontinuing the use of our website. You agree that compliance with these Terms are the legal equivalent of a signed, written contract with The Hype Advisor. You are solely responsible for determining the merits and risks associated with the evaluation of information on our website. We advise that you closely examine the information before making any investment decision. If you are chosen as an investor in our second round of investments, you will be contacted by The Hype Advisor via email, which explains the logistics of our service and contains the agreement contract. Upon signing the contract, you agree to invest the original amount listed on the application. For purposes of your use of our Services, you agree to provide us with accurate information as is required by the application. We agree to not share your information with any third parties, unless we receive permission from you to do so. If any of the information changes at any time during the investment time frame, you agree to promptly notify us of the change(s).")),r.a.createElement("div",{id:"left-bar"},r.a.createElement("div",{id:"contact-us"},r.a.createElement("h4",null,"Contact Us")),r.a.createElement("div",{id:"address"},r.a.createElement("p",null,"10281 Vicksburg Drive ",r.a.createElement("br",null),"Cupertino, CA 95014 ",r.a.createElement("br",null),r.a.createElement("br",null),"+408 887 4558",r.a.createElement("br",null),r.a.createElement("br",null),"team@thehypeadvisor.com")),r.a.createElement("div",{id:"Interest_Form-follow-us"},r.a.createElement("h4",null,"Follow Us")),r.a.createElement(s.a,null))))},n}(r.a.Component)},Bl7J:function(e,t,a){"use strict";var n=a("IRj2"),r=a("q1tI"),i=a.n(r),l=a("LbRr"),s=a("W/9C");a("y0MQ"),a("Vpue");t.a=function(e){var t=e.renderHeader,a=void 0===t||t,r=e.renderFooter,o=void 0===r||r,c=e.children,u=n.data;return i.a.createElement("div",{id:"site"},a&&i.a.createElement(l.a,{siteTitle:u.site.siteMetadata.title}),i.a.createElement("main",null,c),o&&i.a.createElement(s.a,null))}},FCOQ:function(e,t,a){},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"The Hype Advisor"}}}}')},Vpue:function(e,t,a){},y0MQ:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-interest-form-js-26b0696b2f224354ceb7.js.map