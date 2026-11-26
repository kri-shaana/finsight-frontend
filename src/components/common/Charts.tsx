import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, ScatterChart, Scatter, Cell, BarChart, Bar, LineChart, Line,
} from 'recharts';

/* ── Shared chart theme ── */
const CHART_COLORS = {
  accent:  'var(--color-accent)',
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  danger:  'var(--color-danger)',
  muted:   'var(--color-text-muted)',
  border:  'var(--color-border)',
};

function ChartContainer({ title, description, children, height = 240 }: {
  title: string;
  description?: string;
  children: React.ReactNode;
  height?: number;
}) {
  return (
    <div className="card">
      <div className="mb-4">
        <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>{title}</p>
        {description && (
          <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{description}</p>
        )}
      </div>
      <ResponsiveContainer width="100%" height={height}>
        {children as React.ReactElement}
      </ResponsiveContainer>
    </div>
  );
}

/* ── 1. Settlement Flow Visualization (Area) ── */
interface FlowDataPoint { period: string; inflow: number; outflow: number; }

export function SettlementFlowChart({ data }: { data: FlowDataPoint[] }) {
  return (
    <ChartContainer title="Settlement Flow" description="Inflow vs outflow over time">
      <AreaChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="inflowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={CHART_COLORS.success} stopOpacity={0.2} />
            <stop offset="95%" stopColor={CHART_COLORS.success} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="outflowGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={CHART_COLORS.accent} stopOpacity={0.2} />
            <stop offset="95%" stopColor={CHART_COLORS.accent} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
        <XAxis dataKey="period" tick={{ fontSize: 10, fill: CHART_COLORS.muted }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10, fill: CHART_COLORS.muted }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 6, fontSize: 12 }}
          labelStyle={{ color: 'var(--color-text-primary)' }}
        />
        <Area type="monotone" dataKey="inflow" stroke={CHART_COLORS.success} fill="url(#inflowGrad)" strokeWidth={1.5} />
        <Area type="monotone" dataKey="outflow" stroke={CHART_COLORS.accent} fill="url(#outflowGrad)" strokeWidth={1.5} />
      </AreaChart>
    </ChartContainer>
  );
}

/* ── 2. Reconciliation Matrix (Scatter) ── */
interface MatrixPoint { x: number; y: number; status: 'matched' | 'unmatched' | 'partial'; }

const MATRIX_COLORS = { matched: CHART_COLORS.success, unmatched: CHART_COLORS.danger, partial: CHART_COLORS.warning };

export function ReconciliationMatrixChart({ data }: { data: MatrixPoint[] }) {
  return (
    <ChartContainer title="Reconciliation Matrix" description="Settlement vs internal record mapping">
      <ScatterChart margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
        <XAxis type="number" dataKey="x" name="Settlement" tick={{ fontSize: 10, fill: CHART_COLORS.muted }} axisLine={false} tickLine={false} />
        <YAxis type="number" dataKey="y" name="Internal" tick={{ fontSize: 10, fill: CHART_COLORS.muted }} axisLine={false} tickLine={false} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 6, fontSize: 12 }}
        />
        <Scatter data={data}>
          {data.map((entry, i) => (
            <Cell key={i} fill={MATRIX_COLORS[entry.status]} fillOpacity={0.8} />
          ))}
        </Scatter>
      </ScatterChart>
    </ChartContainer>
  );
}

/* ── 3. Financial Activity Heatmap (Bar grid) ── */
interface HeatmapRow { day: string; [hour: string]: string | number; }

export function FinancialActivityHeatmap({ data, hours }: { data: HeatmapRow[]; hours: string[] }) {
  return (
    <ChartContainer title="Financial Activity Heatmap" description="Transaction volume by day and hour" height={200}>
      <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
        <XAxis dataKey="day" tick={{ fontSize: 10, fill: CHART_COLORS.muted }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10, fill: CHART_COLORS.muted }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 6, fontSize: 12 }}
        />
        {hours.map((h, i) => (
          <Bar key={h} dataKey={h} stackId="a" fill={CHART_COLORS.accent} fillOpacity={0.3 + (i / hours.length) * 0.5} />
        ))}
      </BarChart>
    </ChartContainer>
  );
}

/* ── 4. Variance Distribution (Bar) ── */
interface VariancePoint { range: string; count: number; }

export function VarianceDistributionChart({ data }: { data: VariancePoint[] }) {
  return (
    <ChartContainer title="Variance Distribution" description="Frequency of reconciliation variances by range">
      <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
        <XAxis dataKey="range" tick={{ fontSize: 10, fill: CHART_COLORS.muted }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10, fill: CHART_COLORS.muted }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 6, fontSize: 12 }}
        />
        <Bar dataKey="count" fill={CHART_COLORS.accent} radius={[3, 3, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
}

/* ── 5. Transaction Processing Timeline (Line) ── */
interface TimelinePoint { time: string; processed: number; failed: number; pending: number; }

export function TransactionTimelineChart({ data }: { data: TimelinePoint[] }) {
  return (
    <ChartContainer title="Transaction Processing Timeline" description="Processing status over time">
      <LineChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
        <XAxis dataKey="time" tick={{ fontSize: 10, fill: CHART_COLORS.muted }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fontSize: 10, fill: CHART_COLORS.muted }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{ backgroundColor: 'var(--color-card)', border: '1px solid var(--color-border)', borderRadius: 6, fontSize: 12 }}
        />
        <Line type="monotone" dataKey="processed" stroke={CHART_COLORS.success} strokeWidth={1.5} dot={false} />
        <Line type="monotone" dataKey="failed" stroke={CHART_COLORS.danger} strokeWidth={1.5} dot={false} />
        <Line type="monotone" dataKey="pending" stroke={CHART_COLORS.warning} strokeWidth={1.5} dot={false} />
      </LineChart>
    </ChartContainer>
  );
}
