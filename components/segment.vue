<template>
    <div class="o-sort-pulldown">
        <div class="o-sort-select">
          <form method="get" action="#">
              <label for="limit" class="label">表示数</label>
              <select id="limit" name="limit">
                  <option value="3">3件</option>
                  <option value="6">6件</option>
                  <option value="10">10件</option>
              </select>
          </form>
        </div>
        <div class="o-sort-select">
        <form method="get" action="#">
            <label for="sort" class="label">新着順</label>
            <select id="sort" name="orders">
                <option value="publishedAt">新しい順</option>
                <option value="-publishedAt">古い</option>
            </select>
        </form>
        </div>
    </div>
</template>