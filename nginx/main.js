async function contentProvider(r) {
    var response = await r.subrequest("/subrequest");

    //copy headers from subrequest
    for (const h in response.headersOut) {
        r.headersOut[h] = response.headersOut[h];
    }
    r.return(response.status, response.responseBody);

    //manual set after headers copy
    r.headersOut['Content-Encoding'] = "gzip";
    r.warn("manual set Content-Encoding: " + r.headersOut['Content-Encoding']);
}

export default { contentProvider }
