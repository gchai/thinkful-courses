SELECT fiscal_year, COUNT(DISTINCT grant_id), MIN(amount), MAX(amount)
FROM grants GROUP BY fiscal_year
ORDER BY fiscal_year DESC