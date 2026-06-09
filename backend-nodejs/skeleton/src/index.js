const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const healthRouter = require('./routes/health');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.use('/health', healthRouter);

app.get('/', (req, res) => {
  res.json({
    service: '${{ values.component_id }}',
    owner: '${{ values.owner }}',
    version: '1.0.0',
    status: 'running',
  });
});

app.listen(PORT, () => {
  console.log(`[INFO] ${{ values.component_id }} listening on port ${PORT}`);
});

module.exports = app;