-- =====================================================
-- SIT ARCHIVE - AUTH TABLES
-- Run this in your Supabase SQL Editor
-- Dashboard → SQL Editor → New Query → Paste & Run
-- =====================================================

-- 1. User Bookmarks
-- Stores papers saved (bookmarked) by logged-in users.
CREATE TABLE IF NOT EXISTS user_bookmarks (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id      UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    paper_code   TEXT NOT NULL,
    paper_name   TEXT NOT NULL,
    paper_file   TEXT NOT NULL,
    paper_type   TEXT DEFAULT '',
    paper_path   TEXT DEFAULT '[]',   -- JSON array of path keys
    saved_at     TIMESTAMPTZ DEFAULT now(),
    UNIQUE (user_id, paper_code)      -- prevent duplicate bookmarks per user
);

-- RLS: Users can only read/write their own bookmarks
ALTER TABLE user_bookmarks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own bookmarks"
    ON user_bookmarks FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own bookmarks"
    ON user_bookmarks FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own bookmarks"
    ON user_bookmarks FOR DELETE
    USING (auth.uid() = user_id);

-- Index for fast lookup by user
CREATE INDEX IF NOT EXISTS idx_bookmarks_user ON user_bookmarks(user_id, saved_at DESC);


-- =====================================================
-- 2. User Recently Viewed
-- Stores the last 15 papers viewed per user.
-- =====================================================
CREATE TABLE IF NOT EXISTS user_recently_viewed (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id      UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    paper_code   TEXT NOT NULL,
    paper_name   TEXT NOT NULL,
    paper_file   TEXT NOT NULL,
    paper_type   TEXT DEFAULT '',
    paper_path   TEXT DEFAULT '[]',   -- JSON array of path keys
    viewed_at    TIMESTAMPTZ DEFAULT now(),
    UNIQUE (user_id, paper_code)      -- one row per paper per user (upserted on re-view)
);

-- RLS: Users can only read/write their own history
ALTER TABLE user_recently_viewed ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own history"
    ON user_recently_viewed FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own history"
    ON user_recently_viewed FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own history"
    ON user_recently_viewed FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own history"
    ON user_recently_viewed FOR DELETE
    USING (auth.uid() = user_id);

-- Index for fast lookup
CREATE INDEX IF NOT EXISTS idx_recently_viewed_user ON user_recently_viewed(user_id, viewed_at DESC);


-- =====================================================
-- SUPABASE DASHBOARD STEPS:
-- 1. Authentication → Providers → Enable "Google"
--    (add your Google OAuth Client ID & Secret)
-- 2. Authentication → URL Configuration → Site URL:
--    http://localhost:8000
--    Redirect URLs (add both):
--    http://localhost:8000/profile.html
--    https://sitarchive.github.io/profile.html
-- =====================================================
