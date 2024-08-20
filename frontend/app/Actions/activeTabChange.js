const activeTabChange = (tabName) => {
    return{
        type: 'ACTIVE_TAB_CHANGE',
        payload:tabName
    };
};

export default activeTabChange;