const express = require('express');
const path = require('path');
const router = express.Router();
const filesystem = require('fs');

const lista_compras = require("../controllers/lista_compras_controller");


router.get('/', lista_compras.listar);
// ----------------------------------------------------------------

router.get('/nuevaFruta', lista_compras.get_NuevaFruta);


router.post('/nuevaFruta', lista_compras.post_NuevaFruta);

// ----------------------------------------------------------------

router.get('/nuevaVerdura', lista_compras.get_NuevaVerdura);

router.post('/nuevaVerdura', lista_compras.post_NuevaVerdura);
// ----------------------------------------------------------------

router.get('/nuevoLacteo', lista_compras.get_NuevoLacteo);

router.post('/nuevoLacteo', lista_compras.post_NuevoLacteo);



module.exports = router;