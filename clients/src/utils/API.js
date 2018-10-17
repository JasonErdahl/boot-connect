import axios from "axios";

export default {
  // Gets all dashboardJobs
  getDashboardJobs: function() {   
     console.log('getDashboardJobs')
    return axios.get("/api/dashboardJobs");
  },
  // Gets the dashboardJob with the given id
  // Deletes the dashboardJob with the given id
  deleteDashboardJob: function(id) {
    return axios.delete("/api/dashboardJobs/" + id);
  },
  // Saves a dashboardJob to the database
  saveDashboardJobs: function(dashboardJobsData) {
    return axios.post("/api/dashboardJobs", dashboardJobsData);
  },

  // Gets all dashboardMessages
  getDashboardMessages: function() {
    return axios.get("/api/dashboardMessages");
  },
  // Deletes the dashboardMessage with the given id
  deleteDashboardMessages: function(id) {
    return axios.delete("/api/dashboardMessages/" + id);
  },
  // Saves a dashboardMessage to the database
  saveDashboardMessages: function(dashboardMessagesData) {
    return axios.post("/api/dashboardMessages", dashboardMessagesData);
  },

  // Gets all logins
  getLogins: function() {
    return axios.get("/api/login");
  },
  // Gets the login with the given id
  getLogin: function(id) {
    return axios.get("/api/login/" + id);
  },
  // Deletes the login with the given id
  deleteLogin: function(id) {
    return axios.delete("/api/login/" + id);
  },
  // Saves a login to the database
  saveLogin: function(loginData) {
    return axios.post("/api/login", loginData);
  },

  // Gets all logins
  getMembers: function() {
    return axios.get("/api/members");
  },
  // Gets the login with the given id
  getMember: function(id) {
    return axios.get("/api/members/" + id);
  },
  // Deletes the login with the given id
  deleteMember: function(id) {
    return axios.delete("/api/members/" + id);
  },
  // Saves a login to the database
  saveMember: function(membersData) {
    return axios.post("/api/members", membersData);
  }
};
