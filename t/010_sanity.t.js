StartTest(function(t) {
    
    //======================================================================================================================================================================================================================================================
    t.diag('Sanity')
    
    t.ok(Data.UUID, "Data.UUID is here")
    
    var uuids       = {}
    var passed      = true
    
    
    for (var i = 0; i < 1000; i++) {
        
        var uuid = Data.UUID.my.uuid()
        
        if (uuids[uuid]) passed = false
        
        uuids[uuid] = true
    }
    
    
    t.ok(passed, 'No duplicates in 1000 generated UUIDs')
    
    t.done()
})    