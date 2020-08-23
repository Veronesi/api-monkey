const service = {}

service.getResource = (req, res) => {
    const { resource } = req.params
    const count = req.resources[resource].length
    let c1 = Math.floor(Math.random() * count)
    let c2 = Math.floor(Math.random() * count)
    const max = c1 > c2 ? c1 : c2;
    const min = c1 > c2 ? c2 : c1;
    setTimeout(() => {
        res.send({
            success: true,
            resource,
            [resource]: req.resources[resource]
        })
    }, 5000)
}

service.getOneResource = (req, res) => {
    const { resource, id } = req.params;
    const count = req.resources[resource].length
    let c1 = Math.floor(Math.random() * count)
    setTimeout(() => {
        res.send({
            success: true,
            resource,
            id,
            [resource]: count <= id ? req.resources[resource][1] : req.resources[resource][id]
            //[resource]: req.resources[resource][c1] ? req.resources[resource][c1] : {}
        }, 5000)
    })
}

service.patch = (req, res) => {
    setTimeout(() => {
        res.send({
            success: true,
            body: req.body
        })
    }, 1000);
}

service.post = (req, res) => {
    setTimeout(() => {
        res.send({
            success: true,
            body: req.body
        })
    }, 1000);

}

module.exports = service