SELECT SUM(amount) 
FROM grants 
WHERE EXTRACT(YEAR FROM fiscal_year) = 2008 AND applicant_name LIKE '%Women%';