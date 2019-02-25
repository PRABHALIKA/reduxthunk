const loginAction=(data)=>{
    return (d)=>{
        debugger
        d({
            'type':'LOGIN',
            'payload':data
        })
    }
}

export default loginAction;