<script setup>

import { ref } from "vue";


// Liste over de websites (entry points) brugeren kan vælge mellem.
// ref() gør arrayet reaktivt.
const entryPoints = ref([
  {
    id: "spa",
    label: "SEO Checker - Funnel page" // tekst der vises på a-siden
  },
  {
    id: "campaign",
    label: "næmt.nu - Main page"
  },
]);

// Holder styr på hvilket entry point man står på
const activeId = ref("spa");


// Kører når brugeren klikker på en knap.
// activeId opdateres til den valgte side.
function switchDomain(id) {
  activeId.value = id;
}

const data = ref({

  // EP1
  spa: {
    visits: 100,
    bounceRate: 43,
    contactClicks: 15,
    avgApiTime: 3.2,
  },

  // EP2
  campaign: {
    visits: 10,
    bounceRate: 28,
    contactClicks: 26,
    avgApiTime: 2.8,
  },
});

// Returnerer en bestemt metric/KPI
function getMetric(key) {
  // Finder data for det aktive entry point.
  const current = data.value[activeId.value];
  return current ? current[key] : "-";
}
</script>

<template>
  <div class="dashboard">
    <!-- Mobile/tablet top nav -->
    <nav class="dashboard__topnav">
      <button v-for="point in entryPoints" 
        :key="point.id" class="dashboard__topnav-btn" 
        :class="{ active: activeId === point.id }" 
        @click="switchDomain(point.id)"
        >
        {{ point.label }}
      </button>
    </nav>

    <div class="dashboard__body">

      <!-- Desktop sidebar -->
      <aside class="dashboard__sidebar">
        <p class="dashboard__sidebar-title">Entry points</p>

        <button v-for="point in entryPoints" 
          :key="point.id" class="dashboard__domain-btn" 
          :class="{ active: activeId === point.id }" 
          @click="switchDomain(point.id)"
          >
          <span class="dashboard__dot"></span>
          {{ point.label }}
        </button>

        <hr class="dashboard__divider" />
        <p class="dashboard__add">+ Tilføj entry point</p>
      </aside>

      <!-- Main content -->
      <main class="dashboard__main">
        <h1 class="dashboard__title">
          {{ entryPoints.find(p => p.id === activeId)?.label }}
        </h1>
        <p class="dashboard__sub">Live snapshot</p>

        <!-- Card rows -->
        <div class="dashboard__cards">
          <div class="dashboard__row">
            <div class="dashboard__card">
              <span class="dashboard__tag dashboard__tag--reach">Reach</span>
              <p class="dashboard__metric-label">Antal besøgende</p>
              <p class="dashboard__metric-value">{{ getMetric('visits') }}</p>
              <p class="dashboard__metric-sub">Registrerede sessioner</p>
            </div>

            <div class="dashboard__card">
              <span class="dashboard__tag dashboard__tag--engage">Engagement</span>
              <p class="dashboard__metric-label">Bounce rate</p>
              <p class="dashboard__metric-value">{{ getMetric('bounceRate') }}%</p>
              <p class="dashboard__metric-sub">Forlod uden interaktion</p>
            </div>
          </div>

          <div class="dashboard__row">
            <div class="dashboard__card">
              <span class="dashboard__tag dashboard__tag--intent">Intent</span>
              <p class="dashboard__metric-label">Kontaktklik</p>
              <p class="dashboard__metric-value">{{ getMetric('contactClicks') }}</p>
              <p class="dashboard__metric-sub">Mængden der er klikket videre</p>
            </div>

            <div class="dashboard__card">
              <span class="dashboard__tag dashboard__tag--tech">Performance</span>
              <p class="dashboard__metric-label">Gns. API svartid</p>
              <p class="dashboard__metric-value">{{ getMetric('avgApiTime') }}s</p>
              <p class="dashboard__metric-sub">Gennemsnitlige ventetid på API respons</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/main.scss";

.dashboard {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #1a1a1a;
  font-family: $font-montserrat;
}

/* ─── Top nav (mobile + tablet) ──────────────────────── */

.dashboard__topnav {
  display: flex;
  overflow-x: auto;
  background: #111;
  border-bottom: 1px solid #2a2a2a;
  padding: 0 1rem;
  gap: 0.25rem;
  flex-shrink: 0;
}

.dashboard__topnav-btn {
  flex-shrink: 0;
  padding: 0.875rem 1rem;
  font-size: 1rem;
  color: #cccccc;
  background: none;
  border: none;
  border-bottom: 0.125rem solid transparent;
  cursor: pointer;
  font-family: inherit;
  white-space: nowrap;

  &.active {
    color: #fff;
    border-bottom: 0.125rem solid #4d9e8f;
    font-weight: 500;
    padding: 0rem;
  }
}

/* ─── Body (sidebar + main side by side on desktop) ──── */

.dashboard__body {
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* ─── Sidebar (hidden on mobile/tablet) ─────────────── */

.dashboard__sidebar {
  display: none;
}

/* ─── Main ───────────────────────────────────────────── */

.dashboard__main {
  padding: 1.5rem 1rem;
  flex: 1;
}

.dashboard__title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #fff;
  margin: 0 0 0.25rem;
}

.dashboard__sub {
  font-size: 1rem;
  color: #555;
  margin: 0 0 1.25rem;
}

/* ─── Cards ──────────────────────────────────────────── */

.dashboard__cards {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-bottom: 1rem;
}

.dashboard__row {
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
}

.dashboard__card {
  flex: 1;
  background: #111;
  border-radius: 0.5rem;
  padding: 0.875rem;
  border: 1px solid #2a2a2a;
}

.dashboard__tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.125rem 0.5rem;
  border-radius: 1.25rem;
  margin-bottom: 0.5rem;
}

.dashboard__tag--reach  { background: #aacbec; color: #185797; }
.dashboard__tag--engage { background: #e2ceb0; color: #925110; }
.dashboard__tag--intent { background: #9fccb1; color: #0e6e38; }
.dashboard__tag--tech   { background: #c1b7d8; color: #2f1474; }

.dashboard__metric-label {
  font-size: 0.75rem;
  color: #cccccc;
  margin: 0 0 0.375rem;
}

.dashboard__metric-value {
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  margin: 1rem 0rem;
  line-height: 1;
}

.dashboard__metric-sub {
  font-size: 0.625rem;
  color: #cccccc;
  margin: 0;
}

/* ─── Tablet ─────────────────────────────────────────── */

@media (min-width: 768px) {
  .dashboard__main {
    padding: 2rem 1.5rem;
  }

  .dashboard__topnav {
    padding-left: 2rem;
  }

  .dashboard__metric-value {
    font-size: 1.75rem;
  }
}

/* ─── Desktop ────────────────────────────────────────── */

@media (min-width: 1200px) {

  // Hide top nav
  .dashboard__topnav {
    display: none;
  }

  // Body becomes a row
  .dashboard__body {
    flex-direction: row;
    flex: 1;
  }

  // Show sidebar
  .dashboard__sidebar {
    display: flex;
    flex-direction: column;
    width: 18rem;
    flex-shrink: 0;
    background: #111;
    padding: 1.5rem 0;
    border-right: 1px solid #2a2a2a;
  }

  .dashboard__sidebar-title {
    font-size: 0.6875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #666;
    padding: 0 1rem 0.75rem;
  }

  .dashboard__domain-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    font-size: 0.8125rem;
    color: #888;
    background: none;
    border: none;
    border-left: 0.125rem solid transparent;
    cursor: pointer;
    text-align: left;
    font-family: inherit;

    &:hover {
      background: #1a1a1a;
      color: #ccc;
    }

    &.active {
      border-left: 0.125rem solid #4d9e8f;
      color: #fff;
      font-weight: 500;
      background: #1a1a1a;
    }
  }

  .dashboard__dot {
    width: 0.4375rem;
    height: 0.4375rem;
    border-radius: 50%;
    background: #444;
    flex-shrink: 0;

    .active & {
      background: #4d9e8f;
    }
  }

  .dashboard__divider {
    border: none;
    border-top: 1px solid #2a2a2a;
    margin: 0.625rem 1rem;
  }

  .dashboard__add {
    padding: 0.625rem 1rem;
    font-size: 0.75rem;
    color: #888;
    cursor: pointer;
  }

  .dashboard__main {
    padding: 1.5rem;
  }

  .dashboard__title {
    font-size: 1.25rem;
  }

  .dashboard__cards {
    max-width: 50%;
  }
}
</style>