const axios = require('axios');
const dotenv = require ('dotenv') ;

dotenv.config();

const url = `http://172.18.0.3:3000/examLevel`;
const urlW = `http://172.18.0.3:3000/weekQuiz`;
const urlQ = `http://172.18.0.3:3000/userQuiz`;

const resolvers = {
    Query: {
        allExamLevels: async (_) => {
            return axios
                .get(`${url}/AllExams`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        examById: async (_, { body }) => {
            return axios
                .get(`${url}/userExamLevel`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        allWeekQuiz: async (_) => {
            return axios
                .get(`${urlW}/Quizes`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        weekQuizById: async (_, { body }) => {
            return axios
                .get(`${urlW}/thisWeekQuiz`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        allUserQuiz: async (_) => {
            return axios
                .get(`${urlQ}/userQuizes`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        userQuizByIdQuiz: async (_, { body }) => {
            return axios
                .get(`${urlQ}/usersQuizes`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        userQuizByUserId: async (_, { body }) => {
            return axios
                .get(`${urlQ}/quizOfUser`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
    },
    Mutation: {
        createExam: async (_, { body }) => {
            return axios
                .post(`${url}/newExamLevel/`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        updateExam: async (_, { body }) => {
            return axios
                .put(`${url}/completeExamLevel`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        deleteExam: async (_, { body }) => {
            return axios
                .put(`${url}/deleteExamLevel`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        createWeekQuiz: async (_, { body }) => {
            return axios
                .post(`${urlW}/newQuiz/`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        updateWeekQuiz: async (_, { body }) => {
            return axios
                .post(`${urlW}/deactivateQuiz/`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        deleteWeekQuiz: async (_, { body }) => {
            return axios
                .post(`${urlW}/deleteQuiz/`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        createUserQuiz: async (_, { body }) => {
            return axios
                .post(`${urlQ}/newQuiz/`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        deleteUserQuiz: async (_, { body }) => {
            return axios
                .post(`${urlQ}/deleteUserQuiz/`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
    },
};

export default resolvers;