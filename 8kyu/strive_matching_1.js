// Strive Matching #1
// https://www.codewars.com/kata/56c22c5ae8b139416c00175d

function match(candidate, job) {
    if (job.maxSalary == null || candidate.minSalary == null) throw new Exception();
    return job.maxSalary >= candidate.minSalary * 0.9;
}