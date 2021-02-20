
const {Router} = require ('express');

const router = Router();

const {usuariosGet, usuariosPut, usuariosPost, usuariosDelete} = require('../controles/usuarios');

router.get('/', usuariosGet);
router.put('/', usuariosPut);
router.post('/', usuariosPost);
router.delete('/', usuariosDelete);

module.exports = router;