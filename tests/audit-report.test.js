import test from 'node:test';
import assert from 'node:assert/strict';

import { AuditReport } from '../src/index.js';

test('audit report aggregates findings', () => {
  const report = new AuditReport();
  report.addSecurity({ id: 'S-1' });
  report.addUpdate({ id: 'U-1' });
  const out = report.generate();
  assert.match(out, /Security: 1/);
  assert.match(out, /Updates: 1/);
});
