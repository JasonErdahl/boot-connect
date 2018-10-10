USE bootconnect;

INSERT INTO members (firstName, lastName, emailAddress, phoneNumber, professionalURL, education, jobStatus, jobLocation)
VALUES 
("bootFname", "bootLname", "boot@boot.com", "123-123-1234", "linkedin.com", "bs", "looking", "na"),
("bootFname2", "bootLname2", "boot2@boot.com", "123-123-1234", "linkedin.com", "bs", "looking", "na")

INSERT INTO dashboardJobs (url, user, body)
VALUES 
("http://www.jobhere.com", "bootUser", "My company is hiring, great pay, great benefits"),
("http://www.jobhere.com", "bootUser2", "Yo my company is hiring, average pay, what benefits?")

INSERT INTO dashboardMessages (user, body)
VALUES 
("bootUser", "Hello is any one going to the coding refresher on Sat.?"),
("bootUser2", "The Sat coding refresher was so fun!")
