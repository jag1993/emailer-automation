const nodemailer = require('nodemailer'); 
const inquirer
//Username and Password for email that will be sent out to people who have information
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jg93439343@gmail.com',
        pass: 'test12345678'
    }
});

//Email List with contact details
let mailList = {
	first: {email:'jag040393@gmail.com',
         	name: 'Jose Garcia' 
		   },
	second: {email:'joseabgweb@gmail.com',
			 name: 'Purple Joe'
			}
}

//Function that will be ran once per contact in list 
var toMail = (mailList)=>{ 

Object.keys(mailList).map((keyOfMailList)=>{
	let mailOptions = {
    	from: '"Jose Garcia" <jg93439343@gmail.com>', 
    	to: mailList[keyOfMailList].email, 
    	subject: `Hello ${mailList[keyOfMailList].name}`, 
    	text: `Hello ${mailList[keyOfMailList].name} please give me the information I need`, 
	};


		transporter.sendMail(mailOptions, (error, info) => {
    		if (error) {
        		return console.log(error);
    		}
    		console.log('Message %s sent: %s', info.messageId, info.response);
			});
	})

}


// I will call the function in the end of this code
toMail(mailList);

