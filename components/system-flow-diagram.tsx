type FlowNode = {
  title: string;
  detail: string;
  source: string;
  accent?: boolean;
};

type FlowStage = {
  label: string;
  nodes: FlowNode[];
};

type DiagramDefinition = {
  eyebrow: string;
  title: string;
  summary: string;
  stages: FlowStage[];
};

const diagrams: Record<string, DiagramDefinition> = {
  "ai-powered-personalization-systems": {
    eyebrow: "Recommendation Runtime",
    title: "AI-Powered Personalization Systems",
    summary:
      "Profile, event, weather, cultural rules, embeddings, and learned affinity converge before the Flutter client receives an explainable recommendation.",
    stages: [
      {
        label: "01 / Context Inputs",
        nodes: [
          {
            title: "User profile",
            detail: "Style, colors, modesty, comfort, footwear, budget, and sustainability.",
            source: "onboard_entity.dart",
          },
          {
            title: "Event context",
            detail: "Occasion, location, date, formality, time, and cultural hints.",
            source: "EventTable + build_context_v4",
          },
          {
            title: "Weather resolution",
            detail: "Geocode, forecast, normalized conditions, and cached fallback weather.",
            source: "weather_service.py",
          },
        ],
      },
      {
        label: "02 / Classification & Matching",
        nodes: [
          {
            title: "Rule classification",
            detail: "Event, formality, context, time, and cultural override rules.",
            source: "classify_event_v5",
          },
          {
            title: "Concept resolution",
            detail: "Stored concept embeddings, cosine similarity, and cold-start fallback.",
            source: "resolve_concept",
            accent: true,
          },
          {
            title: "Context assembly",
            detail: "Classification, weather, temperature band, gender, and concept blend.",
            source: "build_context_v4",
          },
        ],
      },
      {
        label: "03 / Recommendation Runtime",
        nodes: [
          {
            title: "Inventory scoring",
            detail: "Scores clothing metadata against context, preferences, and learned affinity.",
            source: "score_item_v4",
          },
          {
            title: "Outfit composition",
            detail: "Culture-aware slot selection with confidence-driven variation.",
            source: "OutfitComposerV4",
            accent: true,
          },
          {
            title: "Confidence & fallback",
            detail: "Confidence bands control randomness, blending, and deterministic fallback.",
            source: "compute_confidence_band",
          },
        ],
      },
      {
        label: "04 / Delivery & Learning",
        nodes: [
          {
            title: "Durable snapshot",
            detail: "Generated recommendations and event context are persisted for recovery.",
            source: "SuggestedOutfitSnapshot",
          },
          {
            title: "Flutter experience",
            detail: "Async progress, outfit cards, rationale, weather, shuffle, accept, and reject.",
            source: "OutfitDataBloc",
            accent: true,
          },
          {
            title: "Preference feedback",
            detail: "Accepted and rejected looks reinforce or penalize style affinity.",
            source: "outfit_learning.py",
          },
        ],
      },
    ],
  },
  "backend-driven-mobile-state-systems": {
    eyebrow: "State Recovery Path",
    title: "Backend-Driven Mobile State Systems",
    summary:
      "The Flutter client captures intent quickly, while idempotent backend mutations and persisted snapshots determine the recoverable state shown after interruption.",
    stages: [
      {
        label: "01 / Mobile Intent",
        nodes: [
          {
            title: "Outfit decision",
            detail: "Accept or reject a generated outfit from the event workflow.",
            source: "OutfitDataBloc",
          },
          {
            title: "Bag selection",
            detail: "Add, remove, or recover outfit selections for checkout.",
            source: "ShoppingBagStore",
          },
          {
            title: "Offline mutation",
            detail: "Unavailable requests are stored with replay metadata.",
            source: "OutboxLocalDataSource",
          },
        ],
      },
      {
        label: "02 / Mutation Control",
        nodes: [
          {
            title: "Idempotent operation",
            detail: "Operation id and endpoint prevent duplicate mutation handling.",
            source: "MutationOperation",
          },
          {
            title: "Decision service",
            detail: "Accept and reject services detect conflicts and update saved state.",
            source: "outfit_service.py",
            accent: true,
          },
          {
            title: "Bag synchronization",
            detail: "Pending selections are flushed before active bag state is fetched.",
            source: "payment_repository_impl.dart",
          },
        ],
      },
      {
        label: "03 / Backend Truth",
        nodes: [
          {
            title: "Decision state",
            detail: "Unique user, event, and outfit state prevents conflicting outcomes.",
            source: "OutfitDecisionState",
          },
          {
            title: "Outfit snapshot",
            detail: "Event and recommendation payloads survive restarts and device changes.",
            source: "SuggestedOutfitSnapshot",
            accent: true,
          },
          {
            title: "Saved bag state",
            detail: "Server-side selections preserve purchase intent across devices.",
            source: "ShoppingBagSelection",
          },
        ],
      },
      {
        label: "04 / Recovery & Hydration",
        nodes: [
          {
            title: "Startup recovery",
            detail: "Saved selections merge into the active bag and server outfits are primed.",
            source: "splash_page.dart",
          },
          {
            title: "Replay worker",
            detail: "Queued mutations replay on reconnection and resolve success or conflict.",
            source: "OutboxReplayWorker",
          },
          {
            title: "UI synchronization",
            detail: "Cached state renders first, then backend-confirmed state refreshes the screen.",
            source: "Bloc + local data sources",
            accent: true,
          },
        ],
      },
    ],
  },
  "commerce-payment-reliability": {
    eyebrow: "Transaction Lifecycle",
    title: "Commerce & Payment Reliability",
    summary:
      "Checkout is preserved as a backend order before Paystack opens, then verification and signed webhook events reconcile the final state.",
    stages: [
      {
        label: "01 / Checkout Intent",
        nodes: [
          {
            title: "Shopping bag",
            detail: "Selected outfits and items are assembled with totals and shipping details.",
            source: "ShoppingBagStore",
          },
          {
            title: "Checkout snapshot",
            detail: "Items, selected outfits, currency, and totals become an immutable payload.",
            source: "bag_snapshot",
            accent: true,
          },
          {
            title: "Initialize request",
            detail: "Flutter requests a backend-created Paystack checkout session.",
            source: "payment_remote_data_source.dart",
          },
        ],
      },
      {
        label: "02 / Backend Order Control",
        nodes: [
          {
            title: "Dedupe guard",
            detail: "Stable checkout identity can reuse an active order instead of duplicating it.",
            source: "_stable_checkout_guard_key",
          },
          {
            title: "Pending order",
            detail: "Reference, amount, user, shipping, billing, and bag snapshot are persisted.",
            source: "PaymentOrder",
            accent: true,
          },
          {
            title: "Provider session",
            detail: "The backend initializes Paystack and returns authorization metadata.",
            source: "create_initialized_order",
          },
        ],
      },
      {
        label: "03 / Provider Reconciliation",
        nodes: [
          {
            title: "Client verification",
            detail: "The success callback asks the backend to verify the reference.",
            source: "verifyPaystackPayment",
          },
          {
            title: "Signed webhook",
            detail: "Paystack events are accepted only after HMAC signature validation.",
            source: "handle_paystack_webhook",
            accent: true,
          },
          {
            title: "Event idempotency",
            detail: "A unique provider event key prevents duplicate callback processing.",
            source: "provider_event_key",
          },
        ],
      },
      {
        label: "04 / Commit & Client Sync",
        nodes: [
          {
            title: "Order lifecycle",
            detail: "Paid, pending, failed, refunded, or cancelled state is committed.",
            source: "PaymentOrder.status",
          },
          {
            title: "Audit timeline",
            detail: "Provider and processing transitions remain traceable.",
            source: "OrderTimelineEntry",
          },
          {
            title: "Recovery update",
            detail: "Purchased bag items are cleared and Flutter refreshes backend order truth.",
            source: "payment_repository_impl.dart",
            accent: true,
          },
        ],
      },
    ],
  },
  "content-distribution-aggregation-systems": {
    eyebrow: "Content Supply Chain",
    title: "Content Distribution & Ingestion System",
    summary:
      "Postgres-backed source controls, bounded multi-provider ingestion, canonical article persistence, Redis cache invalidation, feed assembly, and Flutter offline storage turn unstable upstream news into dependable product surfaces.",
    stages: [
      {
        label: "01 / Source Control",
        nodes: [
          {
            title: "Source catalog",
            detail: "RSS, GNews, and NewsAPI sources are defined with country and provider metadata.",
            source: "source_catalog.py",
          },
          {
            title: "Source registry",
            detail: "Enabled, configured, feed URL, poll interval, and last-run state live in Postgres.",
            source: "SourceRegistryService",
            accent: true,
          },
          {
            title: "Conditional state",
            detail: "ETag and Last-Modified values persist across runs to avoid unchanged downloads.",
            source: "NewsSourceRecord",
          },
        ],
      },
      {
        label: "02 / Ingestion Orchestration",
        nodes: [
          {
            title: "Scheduler selection",
            detail: "Due sources are grouped and rotated to control memory and upstream pressure.",
            source: "IngestionPipelineService",
            accent: true,
          },
          {
            title: "Provider adapters",
            detail: "RSS, GNews, and NewsAPI implementations normalize provider-specific access.",
            source: "news_sources/*_adapter.py",
          },
          {
            title: "Bounded execution",
            detail: "Concurrency limits, source timeouts, retries, and run locks isolate failures.",
            source: "_collect_source_results",
          },
        ],
      },
      {
        label: "03 / Normalize & Persist",
        nodes: [
          {
            title: "Canonical article",
            detail: "Entries become stable NewsArticle objects with category, body, tags, and images.",
            source: "RssNewsSourceAdapter",
          },
          {
            title: "Dedupe & storage",
            detail: "Article fingerprints merge repeated inventory before durable Postgres storage.",
            source: "NewsService.ingest_articles",
            accent: true,
          },
          {
            title: "Cache invalidation",
            detail: "Inserted content advances the news namespace so stale responses stop serving.",
            source: "ResponseCacheService",
          },
        ],
      },
      {
        label: "04 / Distribution & Mobile",
        nodes: [
          {
            title: "Feed assembly",
            detail: "Homepage, top, latest, country, category, and personalized feeds use stored truth.",
            source: "NewsService + PersonalizationService",
            accent: true,
          },
          {
            title: "API delivery",
            detail: "Common feed responses use Upstash Redis TTL caching and namespace versions.",
            source: "news.py + response_cache_service.py",
          },
          {
            title: "Offline Flutter feed",
            detail: "Remote feeds hydrate Drift buckets and refresh when connectivity returns.",
            source: "NewsRepositoryImpl + SyncCubit",
          },
        ],
      },
    ],
  },
};

function FlowArrow() {
  return (
    <div className="flex h-10 flex-col items-center justify-center" aria-hidden="true">
      <div className="h-5 w-px bg-gradient-to-b from-primary/70 to-primary/20" />
      <div className="h-2 w-2 rotate-45 border-b border-r border-primary/70" />
    </div>
  );
}

export function SystemFlowDiagram({ slug }: { slug: string }) {
  const diagram = diagrams[slug];

  if (!diagram) {
    return null;
  }

  return (
    <section className="shell-container mb-20" aria-labelledby={`${slug}-flow-title`}>
      <div className="blueprint-panel overflow-hidden rounded-xl border border-border-soft p-5 md:p-8">
        <div className="border-b border-border-soft pb-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
            {diagram.eyebrow}
          </p>
          <h2
            id={`${slug}-flow-title`}
            className="mt-3 text-2xl font-semibold tracking-[-0.04em] md:text-3xl"
          >
            Systems Flow
          </h2>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-foreground/72 md:text-base">
            {diagram.summary}
          </p>
        </div>

        <div className="mt-7">
          {diagram.stages.map((stage, stageIndex) => (
            <div key={stage.label}>
              {stageIndex > 0 ? <FlowArrow /> : null}

              <div className="rounded-lg border border-border-soft bg-surface-ink/70 p-4 md:p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {stage.label}
                </p>

                <div className="mt-4 grid gap-3 lg:grid-cols-3">
                  {stage.nodes.map((node, nodeIndex) => (
                    <div
                      key={node.title}
                      className={`relative min-h-40 rounded-lg border p-5 ${
                        node.accent
                          ? "border-primary/45 bg-primary-strong/10"
                          : "border-border-soft bg-surface-strong/75"
                      }`}
                    >
                      {nodeIndex > 0 ? (
                        <span
                          className="absolute -left-3 top-1/2 hidden -translate-y-1/2 font-mono text-sm text-primary/70 lg:block"
                          aria-hidden="true"
                        >
                          -&gt;
                        </span>
                      ) : null}

                      <h3 className="text-base font-semibold text-foreground">
                        {node.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-foreground/70">
                        {node.detail}
                      </p>
                      <p className="mt-5 break-words font-mono text-[10px] leading-5 text-primary/80">
                        {node.source}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border-soft pt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          <span>Flutter client</span>
          <span>FastAPI services</span>
          <span>Postgres truth</span>
          <span>External providers</span>
        </div>
      </div>
    </section>
  );
}
