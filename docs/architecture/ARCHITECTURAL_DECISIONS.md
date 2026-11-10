# ARCHITECTURAL_DECISIONS — Registros (ADR)

> Sistema ligero de Architecture Decision Records. **Cada decisión importante de arquitectura o diseño queda registrada aquí** con: decisión, contexto, alternativas, razonamiento, consecuencias, fecha y estado. Prohibido cambiar decisiones aprobadas en silencio (Regla 9, `../../CLAUDE.md`): nueva entrada que marque la anterior como superseded y actualice los documentos afectados.

## Formato

```markdown
### ADR-NNN — <Título>
- **Estado:** proposed | accepted | superseded (por ADR-XXX)
- **Fecha:** YYYY-MM-DD
- **Decisión:**
- **Contexto:**
- **Alternativas consideradas:**
- **Razonamiento:**
- **Consecuencias:**
```

---

### ADR-001 — La documentación interna del proyecto se mantiene en español
- **Estado:** accepted
- **Fecha:** 2026-11-10
- **Decisión:** Todos los documentos `docs/` y CLAUDE.md se escriben en español. El sitio público permanece en inglés.
- **Contexto:** El brief maestro (`context.txt`) está en inglés y el sitio inicial se publica en inglés, pero el equipo de trabajo opera en español.
- **Alternativas consideradas:** documentación toda en inglés (coherencia con el sitio); mixto (reglas en inglés, conceptos en español).
- **Razonamiento:** decisión del usuario en la sesión de Fase 0; reduce fricción de revisión para el cliente. Los nombres de archivo y tokens se mantienen en inglés (convención técnica estándar).
- **Consecuencias:** el copy del sitio sigue su propio idioma (inglés); cualquier traducción futura de docs es tarea explícita aparte.

### ADR-002 — Los materiales de la artista no se incorporan todavía al repositorio
- **Estado:** accepted
- **Fecha:** 2026-11-10
- **Decisión:** Por ahora no se añaden los archivos (imágenes, retrato, video, tratamiento del dossier PDF) al `frontend/`. La documentación los lista como pendientes de entrega.
- **Contexto:** El único asset disponible es el dossier PDF (directorio padre `art_portfolio/`); el resto de materiales falta. El usuario decidió no incorporar archivos en esta fase.
- **Alternativas consideradas:** extraer ya contenido del PDF para poblar datos; generar placeholders visuales de obras.
- **Razonamiento:** Fase 0 no implementa páginas ni consume assets; extraer contenido sin aprobación violaría el nivel preliminar/verificado (`../project/CONTENT_GUIDELINES.md`). Placeholders de obra reales violarían la Regla 8.
- **Consecuencias:** Fases 2–5 dependen de la entrega de materiales; hasta entonces, cualquier maqueta usa placeholders identificados o composiciones tipográficas y estados vacíos.

### ADR-003 — Fase 0 no implementa ni scaffolda código; los tokens quedan solo documentados
- **Estado:** accepted
- **Fecha:** 2026-11-10
- **Decisión:** En Fase 0 no se instala framework, no se crea `package.json` ni estilos. `DESIGN_TOKENS.md` define los tokens como especificación (custom properties previstas) a materializar en Fase 1.
- **Contexto:** El brief exige establecer reglas antes de codificar ("Do not implement the complete website", "Do not install dependencies").
- **Alternativas consideradas:** scaffoldar Next.js ya para acelerar Fase 1.
- **Razonamiento:** el orden del brief (reglas primero) asegura que la fundación técnica se construya sobre decisiones documentadas; el scaffold anticipado no aporta valor en Fase 0.
- **Consecuencias:** la primera sesión de Fase 1 empezará con la decisión del stack (ADR propio) y el scaffold del proyecto.
